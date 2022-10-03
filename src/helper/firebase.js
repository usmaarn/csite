import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
import * as yup from "yup";

const firebaseConfig = {
  apiKey: "AIzaSyDFFMFUNjT4KbgN1fMvkJdF9-_HmIM4lRI",
  authDomain: "apc-campaign.firebaseapp.com",
  projectId: "apc-campaign",
  storageBucket: "apc-campaign.appspot.com",
  messagingSenderId: "325601504527",
  appId: "1:325601504527:web:628194fa37ff02b7b2627a",
  measurementId: "G-Q5W675TCY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getUsers() {
  const users = collection(db, "users");
  const snapshot = await getDocs(users);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
}

let schema = yup.object().shape({
  name: yup.string().required(),
  tel: yup.string("invalid phone number").required(),
  ward: yup.string().required(),
  unit: yup.string().required(),
  address: yup.string().required(),
  pvc: yup.string().required(),
});
export async function addUser(data) {
  data = await schema.validate(data);
  await setDoc(doc(db, "users", data.tel), {...data});
}
