import React from 'react'
import Chair from './chair/chair'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './table.css'


function Table (props){




  
    // const verticalSideChairs =

    return(

        <Container>
            <Row className="justify-content-center">
                
                    <PickUpChairs chairsCount="2"  tableId="a"></PickUpChairs>
                
            </Row>
            <Row className="justify-content-center">
                <Col lg={1}>
                    <PickUpChairs chairsCount="5"  tableId="a"></PickUpChairs>
                </Col>
                <Col lg={2} className="table-surface">
                    <div className=""></div>
                </Col>
                <Col lg={1}>
                    <PickUpChairs chairsCount="5"  tableId="a"></PickUpChairs>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <PickUpChairs chairsCount="2"  tableId="a"></PickUpChairs>
            </Row>
        </Container>

        

            
        

    )
}



function PickUpChairs(props){
     // ! is there any to declear props types ?
    const ChairList =[ ...new Array(parseInt(props.chairsCount))].map((val,index) => ({
        'tableId' : props.tableId ,
        'orientation' : 'vertical' ,
        'index' : index
    }))
    console.log("pi")
    return(
        ChairList.map((val , index)=> 
            // ! why do we need key ?
                <Chair key={index} {...val}></Chair>    
        )
    )

}





export default Table