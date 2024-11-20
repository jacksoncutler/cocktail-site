import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBmmPgJeITOm-rjX8stN3qGRDfcdiG5YrE',
  authDomain: 'cocktail-recipes-ce1c0.firebaseapp.com',
  projectId: 'cocktail-recipes-ce1c0',
  storageBucket: 'cocktail-recipes-ce1c0.firebasestorage.app',
  messagingSenderId: '839436646057',
  appId: '1:839436646057:web:394c6e061c9cc8c940dbb8',
};

export const configureFirebase = () => {
  initializeApp(firebaseConfig);
};

export const getImageURL = async (path) => {
  const imgRef = ref(getStorage(), path);
  return await getDownloadURL(imgRef);
};
