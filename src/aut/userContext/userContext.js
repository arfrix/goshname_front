import React, { createContext, useState } from 'react'


export const UserContext = createContext()


function UserContextProvider(props){

    const [userAuthData , setUserAuthData] = useState(null)
    

    return(
        <UserContext.Provider value=
            {{  userAuthData ,
                setUserAuthData ,   

            }}>

            {props.children}

        </UserContext.Provider>
    )
}




export default UserContextProvider