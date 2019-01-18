import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGk9d9hxN5KUGbgjlgqAaXdEXRe6Fysuw",
  authDomain: "restaurant-app-d4b51.firebaseapp.com",
  projectId: "restaurant-app-d4b51",
  databaseURL: "https://restaurant-app-d4b51.firebaseio.com"
});

const settings = {timestampsInSnapshots: true}
const db = firebase.firestore(firebaseApp);
db.settings(settings);
const base = Rebase.createClass(db);


//Named export 
export {firebaseApp};
export default db;
//export default base;