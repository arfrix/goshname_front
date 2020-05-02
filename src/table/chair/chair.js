import React, { useState } from 'react'
import './chair.css'



function Chair(){
    const [isFree , setIsFree] = useState(true)
    const [ifReserved , setIfReserved] = useState(false)
    return(
        <div className >
            {isFree ?
            <img src="assets/img/free_chair.png" className=""></img> :
            ifReserved ? <img src="assets/img/used_chair.png" className=""></img> :
            <img src="assets/img/reserved_chair.png" className=""></img> }
        </div>
    );
}


export default Chair;