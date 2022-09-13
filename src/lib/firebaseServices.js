/* eslint-disable import/no-unresolved */
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,
  signInWithRedirect, getRedirectResult, signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { firebaseConfig } from './configFirebase.js';

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Authentication
// eslint-disable-next-line max-len
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Authentication with Google
// Popup
// export const googleSignIn = () => signInWithPopup(auth, provider);

// Redireccionando
export const googleSignIn = () => {
  // signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      if (!result) {
        signInWithRedirect(auth, provider);
        window.location.hash = '#wall';
      }
      console.log(result);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

