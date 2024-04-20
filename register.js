import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEFUMfjRp3kPDzIBWYebUbn6tH6q7-Hm8",
    authDomain: "culinary-trace-1dcae.firebaseapp.com",
    projectId: "culinary-trace-1dcae",
    storageBucket: "culinary-trace-1dcae.appspot.com",
    messagingSenderId: "847109161986",
    appId: "1:847109161986:web:4b3d4146cf2265dac5131b",
    measurementId: "G-7DQHWFYMET"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}