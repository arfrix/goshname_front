import React, { useState, useEffect } from 'react'
import TimeModal from '../../../timeReservation/timeModal'
import './chair.css'



function Chair(props){
    console.log('chairs')
    
    

    //! each useState can cause rerender ?
    //tip maybe because let everything update , however useState is changing state value
    // const [isFree , setIsFree] = useState(props.isFreeInit)
    // const [iSReserved , setIfReserved] = useState(props.isReservedInit)
    const [direction, setDirection] = useState()

    //tip if setDirection() called outside of useEffect ,its like do side effect inside render() and cause rerender loops happend
    useEffect(()=>{

        //tip use setDirection() to be sure rerender happend after convertChairDirectionToCssClass() execute completly 
        //! if use convertChairDirectionToCssClass() directly on className , dose rerender happend after convertChairDirectionToCssClass() execute completly
        setDirection(convertChairDirectionToCssClass(props.chairLineSituation))


    }, [props.chairLineSituation])


    const [imgPath,setImgPath] = useState('assets/img/free_chair.png')
    
    useEffect(() =>{
        setImgPath(chairSituationToImgPath(props.isFree , props.idReserved))
    }, [props.idReserved, props.isFree, props.situation])


    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div  className="fit-content-width mx-auto my-2"  onClick={() => setShowModal(true)}>        
                <img src={imgPath} className={direction}></img>
            </div>
        
            <TimeModal 
                show={showModal}
                onHide={()=> setShowModal(false)}
            />
        </>
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

function chairSituationToImgPath(ifFree , idReserved){
    if(ifFree)
        return 'assets/img/free_chair.png'
    else 
        if(idReserved)
            return 'assets/img/reserved_chair.png'
        else 
            return  'assets/img/used_chair.png'  
    
}


export default Chair;