import React, { useEffect } from 'react'
import firebase from '../fireBase/firebase'


function Splash(){

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
            } else {
              // No user is signed in.
            }
          });
    })




    return(
        <h1>
            یکم وایسا
        </h1>
    )
}


export default Splash