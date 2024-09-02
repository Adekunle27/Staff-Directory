const admin = require("firebase-admin");
const serviceAccount = require("./staff-directory.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://staff-directory-89ac3.firebaseio.com",
});

const uid = "Am1xrhnGUeM7nCHLUGUdlgWChhk1";

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log("Custom claims set for user:", uid);
  })
  .catch((error) => {
    console.error("Error setting custom claims:", error);
  });

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

const db = admin.firestore();

const updateDocumentsWithTimestamp = async () => {
  const usersCollection = db.collection("users");
  const snapshot = await usersCollection.get();

  const batch = db.batch(); // Use batch for bulk updates

  snapshot.forEach((doc) => {
    const data = doc.data();

    // Check if the document doesn't have a createdAt field
    if (!data.createdAt) {
      const createdAt = admin.firestore.FieldValue.serverTimestamp();
      const docRef = usersCollection.doc(doc.id);

      batch.update(docRef, { createdAt });
    }
  });

  // Commit the batch update
  await batch.commit();
  console.log("All documents have been updated with createdAt timestamps.");
};

updateDocumentsWithTimestamp()
  .then(() => console.log("Script completed successfully."))
  .catch((error) => console.error("Error updating documents:", error));
