import express from 'express';
import { userRouter } from './users/searchRoute';
import { signupRouter } from './users/signupRoute';
import { authMiddleWare } from './auth/authMiddleWare';

// route of routes
export const apiRouter = express.Router();

// signup douesnt require authentication
apiRouter.use('/signup', signupRouter);

// top of stack == authentication middleware
// user needs token to pass authentication layer
apiRouter.use('/users', authMiddleWare);
apiRouter.use('/users', userRouter);
