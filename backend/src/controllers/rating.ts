import { prisma } from '../index'
import { Request, Response } from 'express'

// This function is used to get all ratings of a user
export const allRating = async (req: Request, res: Response) => {
  const { userId } = req.params
  const ratings = await prisma.rating.findMany({
    where: {
      ratingBy: userId
    },
    include: {
      ratingToUser: true
    }
  })
  res.json(ratings)
}
