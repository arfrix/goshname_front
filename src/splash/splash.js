import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import firebase from '../fireBase/firebase'
// ! how move all firebase stuff to ../fireBase/firebase.js !!!!!!!!!!!!!!!!!!!!!!!!

function Splash(){
    let history = useHistory()

    useEffect(()=>{
        firebase.auth.onAuthStateChanged(function(user) {
            if (user) {
              console.log("signed in")
              history.push('/home')
            } else {
                console.log('not signed in')
                history.push('/login')
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