import React from 'react'
import Chair from './chair/chair'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Table (props){




  
    // const verticalSideChairs =

    return(

        <Container>
            <Row>
                <PickUpChairs chairsCount="5"  tableId="a"></PickUpChairs>
            </Row>
            <Row>
                <Col></Col>
                <Col lg={5}>table</Col>
                <Col></Col>
            </Row>
            <Row></Row>
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