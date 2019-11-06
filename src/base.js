import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
  projectId: 'restaurant-app-d4b51',
  databaseURL: process.env.FIRESTORE_DATABASE_URL
})

const settings = { }
const db = firebase.firestore(firebaseApp)
db.settings(settings)
const auth = firebase.auth()

export { firebaseApp, auth }
export default db
