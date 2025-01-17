import express from 'express';
import { getUser, addUser } from './controller';
import { authMiddleWare } from '../auth/authMiddleWare';

export const userRouter = express.Router();

userRouter.get('/', authMiddleWare, async (req, res) => {
  const user = req.query;
  await getUser(user)
    .then((userList) => {
      res.status(200).send(userList);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'something went wrong retreving users from db.' });
    });
});

userRouter.post('/', async (req, res) => {
  const user = req.body;
  await addUser(user)
    .then(() => {
      res.status(200).send('add users');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'something went wrong adding user to db.' });
    });
});
