const admin = require('firebase-admin');
const serviceAccount = require('./staff-directory.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://staff-directory-89ac3.firebaseio.com'
});

const uid = 'Am1xrhnGUeM7nCHLUGUdlgWChhk1';

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('Custom claims set for user:', uid);
  })
  .catch((error) => {
    console.error('Error setting custom claims:', error);
  });
