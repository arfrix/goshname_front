import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
// ! how move all firebase stuff to ../fireBase/firebase.js !!!!!!!!!!!!!!!!!!!!!!!!
import firebase from '../fireBase/firebase'

import {UserContext} from '../aut/userContext/userContext'



function Splash(){
    const {setUserAuthData} = useContext(UserContext)

    let history = useHistory()

    useEffect(()=>{
        console.log(setUserAuthData)
        firebase.auth.onAuthStateChanged(function(user) {
            if (user) {
              console.log("signed in")
              setUserAuthData(user)
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