import React, { createContext, useState } from 'react'


export const UserContext = createContext()


function UserContextProvider(props){

    const [userAuthData , setUserAuthData] = useState(null)
    const [userReservation , setUserReservation] = useState(null)

    return(
        <UserContext.Provider value=
            {{  userAuthData ,
                setUserAuthData ,   
                userReservation ,
                setUserReservation
            }}>

            {props.children}

        </UserContext.Provider>
    )
}




export default UserContextProvider