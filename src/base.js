import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-6RrKpbW6Bc3HrUOVOQ-vioPCGLEjeNM",
    authDomain: "wild-shapes.firebaseapp.com",
    databaseURL: "https://wild-shapes.firebaseio.com",
    projectId: "wild-shapes",
    storageBucket: "wild-shapes.appspot.com",
    messagingSenderId: "324189122123"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;