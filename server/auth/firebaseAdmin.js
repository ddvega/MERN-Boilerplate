import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// key to control of the authentication system
const serviceAcccount = {
  type: process.env.TYPE,
  project_id: process.env.PID,
  private_key_id: process.env.PKID,
  private_key: process.env.PK.replace(/\\n/g, '\n'),
  client_email: process.env.CE,
  client_id: process.env.CID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
  client_x509_cert_url: process.env.CLIENT_URL,
};

// database admin
export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAcccount),
  databaseURL: process.env.DATABASE_URL,
});
