import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-TD-mN3F5k8Vmha14DX82qcYZ4kC5PlI",
  authDomain: "projectmanager-67f9c.firebaseapp.com",
  databaseURL: "https://projectmanager-67f9c.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
