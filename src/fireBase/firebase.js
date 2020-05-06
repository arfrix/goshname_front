import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqjMCW6n2Gccd-XP0xIUmB9hrQfWwZNK4",
    authDomain: "goshname-84416.firebaseapp.com",
    databaseURL: "https://goshname-84416.firebaseio.com",
    projectId: "goshname-84416",
    storageBucket: "goshname-84416.appspot.com",
    messagingSenderId: "740704747445",
    appId: "1:740704747445:web:000c5ed72ab48d30f6e3fc",
    measurementId: "G-WT08QZH6FQ"
  };



class firebase{
    constructor(){
        app.initializeApp(firebaseConfig)
        // app.analytics()
        // this.auth = app.auth()
        this.db = app.firestore()
    }

    addReservation(){
       return this.db.collection('tables').doc('table_a').collection('chair_a_1').doc('morning').collection('cell_8_00').doc('eshvazDangahe').set({
        dateExample: app.firestore.Timestamp.fromDate(new Date("December 10, 1815"))
       })
    }


}


export default new firebase()