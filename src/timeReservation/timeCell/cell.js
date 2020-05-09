import React, { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import FinalAcceptModal from '../finalAcceptModal'
import Modal from 'react-bootstrap/Modal'
import {reservationContext} from '../../reservationContext/reservationContext'



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

    const {dispatch} = useContext(reservationContext)
    function cellOnClick(props){
        dispatch({
            type:'ADD_DAY_PART',
            payload : props.onWitchPartOfDay
        })
        dispatch({
            type:'ADD_CELL',
            payload : props.startTime
        })


        setShowModal(true)
    }

    
    const [showModal, setShowModal] = useState(false);

    return(
      <>
        <Button variant={btnVariant} className="m-2" onClick={() => cellOnClick(props)}>{props.startTime}</Button>
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