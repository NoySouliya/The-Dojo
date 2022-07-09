import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_apiKey,
  authDomain: 'the-dojo-1a421.firebaseapp.com',
  projectId: import.meta.env.VITE_APP_projectId,
  storageBucket: 'the-dojo-1a421.appspot.com',
  messagingSenderId: '520595303369',
  appId: import.meta.env.VITE_APP_appId,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
