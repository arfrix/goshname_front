import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {firebaseConfig} from './firebaseConfig'
// Your web app's Firebase configuration




class firebase{
    constructor(){
        app.initializeApp(firebaseConfig)
        // app.analytics()
        this.auth = app.auth()
        this.db = app.firestore()
    }
    

    login(){
        var provider = new app.auth.GoogleAuthProvider();
        app.auth().signInWithRedirect(provider);
    }

    logOut(){

    }

    addReservation(tableId , chairId , dayPart , cellTime){
        if(this.auth.currentUser.displayName !== null){
            return this.db.collection('tables').doc(tableId).collection(chairId).doc(dayPart).collection(cellTime).doc(this.auth.currentUser.displayName).set({
             dateExample: app.firestore.Timestamp.fromDate(new Date("December 10, 1815"))
            })

        }else{
            alert("reed")
        }
    //    return this.db.collection('tables').doc('table_a').collection('chair_a_1').doc('morning').collection('cell_8_00').doc('eshvazDangahe').set({
    //     dateExample: app.firestore.Timestamp.fromDate(new Date("December 10, 1815"))
    //    })
    }


}




export default new firebase()



