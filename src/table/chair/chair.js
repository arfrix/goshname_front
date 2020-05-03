import React, { useState } from 'react'
import './chair.css'



function Chair(props){
    console.log('chairs')
    console.log(props)

    //! ech useState can cause rerender ?
    // const [isFree , setIsFree] = useState(props.isFreeInit)
    // const [iSReserved , setIfReserved] = useState(props.isReservedInit)
    return(
        <div  className="fit-content-width">
            {/* {isFree ?
            <img src="assets/img/free_chair.png" className=""></img> :
            iSReserved ? <img src="assets/img/used_chair.png" className=""></img> :
            <img src="assets/img/reserved_chair.png" className=""></img> } */}
            
            <img src="assets/img/free_chair.png" className=""></img> {props.index}
        </div>
    );
}


export default Chair;