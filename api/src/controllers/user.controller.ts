import { Request, Response, NextFunction } from 'express'

import User from '../models/User'
import { BadRequestError } from '../helpers/apiError'
import userService from '../services/user.service'

// POST /users
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstname, surname, username, email, password, isBanned, isAdmin } =
      req.body

    const user = new User({
      firstname,
      surname,
      username,
      email,
      password,
      isBanned,
      isAdmin,
    })

    await userService.create(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// PUT /users/:userId
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await userService.update(userId, update)
    res.json(updatedUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// DELETE /users/:userId
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userService.deleteUser(req.params.userId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// GET /user/:userId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await userService.findById(req.params.userId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}

// GET /users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await userService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', 400, error))
    } else {
      next(error)
    }
  }
}
