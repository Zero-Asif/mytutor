import { Router } from 'express'
import { errorHandler } from '../error-hander'
import {
  updateProfile,
  updateProfileImage,
  getUser,
  changeEmail,
  changePassword,
  updateCoverImage
} from '../controllers/porfile'
import multer from 'multer'
import { authMiddleware } from '../middlewares/auth'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const profileRoutes: Router = Router()

profileRoutes.get('/', authMiddleware, errorHandler(getUser))

profileRoutes.post(
  '/update-profile',
  authMiddleware,
  errorHandler(updateProfile)
)
profileRoutes.post(
  '/update-image',
  authMiddleware,
  upload.single('profilePic'),
  errorHandler(updateProfileImage)
)

profileRoutes.post(
  '/update-cover',
  authMiddleware,
  upload.single('coverPhoto'),
  errorHandler(updateCoverImage)
)

profileRoutes.post(
  '/change-password',
  authMiddleware,
  errorHandler(changePassword)
)
profileRoutes.post('/change-email', authMiddleware, errorHandler(changeEmail))

export default profileRoutes
