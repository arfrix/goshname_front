import React, { useState, useEffect } from 'react'
import './chair.css'



function Chair(props){
    console.log('chairs')
    

    //! each useState can cause rerender ?
    //tip maybe because let everything update , however useState is changing state value
    // const [isFree , setIsFree] = useState(props.isFreeInit)
    // const [iSReserved , setIfReserved] = useState(props.isReservedInit)
    const [direction, setDirection] = useState()

    //tip if call setDirection outside useEffect ,its like do side effect inside render() and cause rerender loops happend
    useEffect(()=>{

        console.log(props.chairLineSituation)

        //tip use setDirection() to be sure rerender happend after convertChairDirectionToCssClass() execute completly 
        //! if use convertChairDirectionToCssClass() directly on className , dose rerender happend after convertChairDirectionToCssClass() execute completly
        setDirection(convertChairDirectionToCssClass(props.chairLineSituation))
    }, [props.chairLineSituation])
    

    return(
        <div  className="fit-content-width m-3">
            {/* {isFree ?
            <img src="assets/img/free_chair.png" className=""></img> :
            iSReserved ? <img src="assets/img/used_chair.png" className=""></img> :
            <img src="assets/img/reserved_chair.png" className=""></img> } */}
            
            <img src="assets/img/free_chair.png" className={direction}></img>
        </div>
    );
}


function convertChairDirectionToCssClass(direction){
    switch(direction){
        case 'top':
            return 'to-bottom-orientation'
        case 'bottom':
            return 'to-top-orientation'
        case 'left':
            return 'to-right-orientation'
        case 'right':
            return 'to-left-orientation'

            default: return ''
    }
}


export default Chair;