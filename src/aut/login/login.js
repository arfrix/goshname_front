import React, { useContext , useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import firebase from '../../fireBase/firebase'
import {UserContext} from '../userContext/userContext'



function Login (){
  const {setUserAuthData} = useContext(UserContext)
    let history = useHistory()
    
    useEffect(()=>{
        
        // ! how move all firebase stuff to ../fireBase/firebase.js !!!!!!!!!!!!!!!!!!!!!!!!
        firebase.auth.getRedirectResult().then((result) => {
            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const token = result.credential.accessToken;
              
            }
            // The signed-in user info.
            const user = result.user;
    
            if(result.user){
                setUserAuthData(user)
                history.push('/home')
            }
            
       
      
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    })
    return(
        <Button variant="outline-primary" onClick={firebase.login}>login</Button>
    )
}



export default Login