// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDK3jUF6Av8-OZQaENqP6JSwlFpOD-f4yI',
  authDomain: 'e-commerce-audiophile.firebaseapp.com',
  projectId: 'e-commerce-audiophile',
  storageBucket: 'e-commerce-audiophile.appspot.com',
  messagingSenderId: '668140410512',
  appId: '1:668140410512:web:eb4bda04d111f078f22a15',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
