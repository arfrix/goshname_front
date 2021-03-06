import React, { useRef, useEffect, useState, useContext } from 'react'
import Chair from './chair/chair'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './table.css'

import {reservationContext} from '../../reservationContext/reservationContext'


function Table (props){

    const { dispatch } = useContext(reservationContext)

    const [tableHeight , setTableHeight] = useState()
    const tRef  = useRef()

  
    useEffect(() => {
        const refCurrent = tRef.current

       
        setTableHeight(refCurrent.clientHeight)
        
    }, [])



    return(

        <Container className="my-5">
            <Row className="justify-content-center">
                
                    <PickUpChairs chairsCount={props.horizontalSize}  tableId={props.tableId} chairLineSituation="top"></PickUpChairs>
                
            </Row>
            <Row className="justify-content-center align-items-center">
                <Col lg={0} className="p-0" ref={tRef}>
                    <PickUpChairs chairsCount={props.verticalSize}  tableId={props.tableId} chairLineSituation="right"></PickUpChairs>
                </Col>
                <Col lg={4} className="table-surface p-0 m-2" style={{height : tableHeight + 'px'}}>
                    {/* <img src="assets/img/table.png"></img> */}
                    {props.tableId}
                </Col>
                <Col lg={0} className="p-0">
                    <PickUpChairs chairsCount={props.verticalSize}  tableId={props.tableId} chairLineSituation="left"></PickUpChairs>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <PickUpChairs chairsCount={props.horizontalSize}  tableId={props.tableId} chairLineSituation="bottom"></PickUpChairs>
            </Row>
        </Container>

        

            
        

    )
}



function PickUpChairs(props){
     // ! is there any to declear props types ?
    const ChairList =[ ...new Array(parseInt(props.chairsCount))].map((val,index) => ({
        'tableId' : props.tableId ,
        'index' : index ,
        'chairLineSituation' : props.chairLineSituation,
        'isFree' : true ,
        'idReserved' : false
    }))
    // console.log("pi")
    return(
        ChairList.map((val , index)=> 
            // ! why do we need key ?
                <Chair key={index} {...val}></Chair>    
        )
    )

}





export default Table