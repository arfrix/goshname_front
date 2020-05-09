import React, { createContext, useReducer } from 'react'
import reservationReducer from './reservationReducer'


export reservationContext = createContext()


function reservationContextProvider(props){

    const [reservation , dispatch] = useReducer(reservationReducer , {
        tableId : null ,
        chairId : null ,
        dayPart : null ,

    })


    return(
        <reservationContext.Provider value={reservation , dispatch}>
            {props.children}
        </reservationContext.Provider>
    )
}