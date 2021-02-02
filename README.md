# MERN (MongoDB Express React Node) Webpack5 Boilerplate



#### Default Features
- React frontend with `firebase authentication` set and linked to secure the front and back end. Tokens passed in react front end and verified by express backend. 
- Document based noSQL `MongoDB` database has a user model set by default. User model is set to link with firebase authentication. User.uid in firebase is the same as the User._uid in mongoDB.
- Login system (Signup, Login, Logout, Forgot Password) all set and secured with `Firebase`.
-  `Material UI` theme manager is set with a default color scheme that can easily be changed. Simply edit the /client/styles/theme.js file. For more info check out https://material-ui.com/customization/theming/
-  I tested deployment on heroku. Template works without a Procfile or any changes to the code. Set the mode to production and push to heroku. Should work without errors as long as .env variables needed are available.

*You'll need the .env file in the root directory with the following info for the template to work.*


```
NODE_ENV = <production or development>
APP_NAME = <name of app>
PORT = <number you want the backend to use>
MONGO_URI = <mongodb connection string>
TYPE = <service_account for firebase>
PID = <project id>
PKID = <private key id>
PK = <-----BEGIN PRIVATE KEY-----=\n-----END PRIVATE KEY-----\n>
CE = <client-email>
CI = <client id>
AUTH_URI = <auth uri>
TOKI = <token uri>
AUTH_PROVIDER = <>
CLIENT_URL = <>
DATABASE_URL: <>
REACT_APP_FIREBASE_API_KEY=<>
REACT_APP_FIREBASE_AUTH_DOMAIN=<>
REACT_APP_FIREBASE_DATABASE_URL=<>
REACT_APP_FIREBASE_PROJECT_ID=<>
REACT_APP_FIREBASE_STORAGE_BUCKET=<>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<>
REACT_APP_FIREBASE_APP_ID=<>
```
