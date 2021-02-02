import express from 'express';
import { getUser } from './controller';

export const userRouter = express.Router();

// GET users
userRouter.get('/', async (req, res) => {
 
  // const {_id, username} = req.query
  // console.log(`id=${_id} username=${username}`)
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

// // GET users
// userRouter.get('/id', async (req, res) => {
//   const id = req.query;
//   await getUserByID(id)
//     .then((userList) => {
//       res.status(200).send(userList);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: 'something went wrong retreving users from db.' });
//     });
// });
