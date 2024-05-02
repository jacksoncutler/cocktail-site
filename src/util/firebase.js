import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCmG7a1oz7cRDZlCxZjGlOHeXYpMGSdwFc',
  authDomain: 'cocktail-demo-fb739.firebaseapp.com',
  projectId: 'cocktail-demo-fb739',
  storageBucket: 'cocktail-demo-fb739.appspot.com',
  messagingSenderId: '144900192050',
  appId: '1:144900192050:web:b963294583a285496c892b',
};

export const configureFirebase = () => {
  initializeApp(firebaseConfig);
};

export const getImageURL = async (path) => {
  const imgRef = ref(getStorage(), path);
  return await getDownloadURL(imgRef);
};
