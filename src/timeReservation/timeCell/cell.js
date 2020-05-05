import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import FinalAcceptModal from '../finalAcceptModal'
import Modal from 'react-bootstrap/Modal'




function Cell(props){

    const [btnVariant , setBtnVariant] = useState('outline-secondary')

    useEffect(()=>{
        convertProsToBtnVariant(props.situation)
    },[props.situation])

    function convertProsToBtnVariant(prop){
        console.log(prop)
        switch (prop) {
            case 'free':
                setBtnVariant('outline-secondary')
                break;
            case 'used':
                setBtnVariant('danger')
                break;
            case 'reserved':
                setBtnVariant('success')
                break;
        
            default:
                break;
        }
    }

    
    const [showModal, setShowModal] = useState(false);

    return(
      <>
        <Button variant={btnVariant} className="m-2" onClick={() => setShowModal(true)}>{props.startTime}</Button>
        {`   `}
        <FinalAcceptModal
            show={showModal}
            onHide={()=> setShowModal(false)}
            timeCell={props.startTime}
        />
      </>

    )
}





export default Cell