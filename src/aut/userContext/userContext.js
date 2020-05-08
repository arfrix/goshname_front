import React, { createContext, useState } from 'react'


export const UserContext = createContext()


function UserContextProvider(props){

    const [userAuthData , setUserAuthData] = useState()
    const [userReservation , setUserReservation] = useState()

    return(
        <UserContext.Provider value=
            {{userAuthData ,
            setUserAuthData ,   
            userReservation ,
            setUserReservation
            }}>

            {props.children}

        </UserContext.Provider>
    )
}




export default UserContextProvider