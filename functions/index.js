const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://staff-directory-89ac3.firebaseio.com",
});

exports.setAdmin = functions.https.onRequest(async (req, res) => {
  const uid = "Am1xrhnGUeM7nCHLUGUdlgWChhk1";

  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    res.send("Custom claims set for user: " + uid);
  } catch (error) {
    console.error("Error setting custom claims:", error);
    res.status(500).send("Error setting custom claims: " + error);
  }
});
