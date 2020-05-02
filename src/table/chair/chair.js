import React, { useState } from 'react'
import './chair.css'



function Chair(isFreeInit , isReservedInit){
    const [isFree , setIsFree] = useState(isFreeInit)
    const [iSReserved , setIfReserved] = useState(isReservedInit)
    return(
        <div className >
            {isFree ?
            <img src="assets/img/free_chair.png" className=""></img> :
            iSReserved ? <img src="assets/img/used_chair.png" className=""></img> :
            <img src="assets/img/reserved_chair.png" className=""></img> }
        </div>
    );
}


export default Chair;