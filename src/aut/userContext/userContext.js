import React, { createContext, useState } from 'react'


export const UserContext = createContext()


function UserContextProvider(props){

    const [userAutData , setUserAutData] = useState()
    const [userReservation , setUserReservation] = useState()

    return(
        <UserContext.Provider value=
            {userAutData ,
            setUserAutData ,   
            userReservation ,
            setUserReservation
            }>

            {props.children}

        </UserContext.Provider>
    )
}




export default UserContextProvider