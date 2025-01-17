import { firebaseAdmin } from './firebaseAdmin';

// gatekeeper to api
export function authMiddleWare(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.send({ message: 'Token Missing.' }).status(401);
    next(new Error('Need a token'));
  }

  if (authHeader && authHeader.split(' ')[0] !== 'Bearer') {
    res.send({ message: 'Invalid token' }).status(401);
    next(new Error('Token passed is invalid.'));
  }

  // verify token received from client
  const token = authHeader.split(' ')[1];
  firebaseAdmin
    .auth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() => res.send({ message: 'Authorization failed' }).status(403));
}
