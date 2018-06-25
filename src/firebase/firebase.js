import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB8bverf2RThPEw2_pXpOCckeIvk5tINh4",
  authDomain: "expensify-48cdd.firebaseapp.com",
  databaseURL: "https://expensify-48cdd.firebaseio.com",
  projectId: "expensify-48cdd",
  storageBucket: "expensify-48cdd.appspot.com",
  messagingSenderId: "923907647498"
}

firebase.initializeApp(config)

firebase.database().ref().set({
  name: 'Jaime M Gonzalez'
})