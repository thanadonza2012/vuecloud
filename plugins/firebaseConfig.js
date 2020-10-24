import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyAa9Yj0mD5OPAHmEurcTp_yO2wQxFHrvqw",
        authDomain: "vuecloud-94cbc.firebaseapp.com",
        databaseURL: "https://vuecloud-94cbc.firebaseio.com",
        projectId: "vuecloud-94cbc",
        storageBucket: "vuecloud-94cbc.appspot.com",
        messagingSenderId: "710185496335",
        appId: "1:710185496335:web:cec71e6cc25d438eca987a",
        measurementId: "G-SV5RD82GL4"
    }
    firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()