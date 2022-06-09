/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAO_WQCbwcpGRoTP41wrdpfxlSnqCRzBWc",
  authDomain: "test-94b49.firebaseapp.com",
  projectId: "test-94b49",
  storageBucket: "test-94b49.appspot.com",
  messagingSenderId: "599316752993",
  appId: "1:599316752993:web:2526a164c61a0988125820"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}