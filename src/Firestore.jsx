import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_xNt7pi_cH6wTCBq3AEuVtkqGLVt1xSI",
  authDomain: "music-lesson-practice.firebaseapp.com",
  databaseURL: "https://music-lesson-practice.firebaseio.com",
  projectId: "music-lesson-practice",
  storageBucket: "music-lesson-practice.appspot.com",
  messagingSenderId: "874537940387",
  appId: "1:874537940387:web:ccbf1eb5c3b57c5e159616",
  measurementId: "G-JEPN5SV529",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

async function getAllVideos() {
  const videos = await firestore.collection("videos").get();
  return videos.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}

async function addNewVideo(title, description, file) {
  // TODO: Add file to fire storage
  firestore.collection("videos").add({
    title,
    description,
    fileUrl: "",
  });
}

async function deleteVideo(id) {
  await firestore.collection("videos").doc(id).delete();
}

export { getAllVideos, addNewVideo, deleteVideo };
