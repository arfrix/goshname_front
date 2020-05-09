import React, { createContext, useReducer } from 'react'
import {reservationReducer} from './reservationReducer'


export const reservationContext = createContext()


function ReservationContextProvider(props){

    const [reservation , dispatch] = useReducer(reservationReducer , {
        tableId : null ,
        chairId : null ,
        dayPart : null ,
        cell : null
    })


    return(
        <reservationContext.Provider value={{reservation , dispatch}}>
            {props.children}
        </reservationContext.Provider>
    )
}




export default ReservationContextProvider