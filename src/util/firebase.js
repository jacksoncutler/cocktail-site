import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBqa93VM4VjDflzBj49m-NT8g9o6vFbSbQ',
  authDomain: 'cocktail-menu-fe2f8.firebaseapp.com',
  projectId: 'cocktail-menu-fe2f8',
  storageBucket: 'cocktail-menu-fe2f8.firebasestorage.app',
  messagingSenderId: '325104387652',
  appId: '1:325104387652:web:f7c9606e64f555842a1e11',
};

export const configureFirebase = () => {
  initializeApp(firebaseConfig);
};

export const getImageURL = async (path) => {
  const imgRef = ref(getStorage(), path);
  return await getDownloadURL(imgRef);
};
