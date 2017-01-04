import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDeptOfUcteMAIVolYlOQHwijTdQUYZKkQ",
  authDomain: "networkr-ed044.firebaseapp.com",
  databaseURL: "https://networkr-ed044.firebaseio.com",
  storageBucket: "networkr-ed044.appspot.com",
  messagingSenderId: "367106701973"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => firebase.auth().signOut();
export const reference = firebase.database().ref('contacts');
