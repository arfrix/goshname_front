import React from 'react'
import Chair from './chair/chair'
import Container from 'react-bootstrap/Container'


function Table (props){
  
    
    // ! is there any to declear props types ?
    // const verticalChairList =[ ...new Array(parseInt(props.verticalSize))].map((val,index) => ({
    //     'tableId' : props.tableId ,
    //     'orientation' : 'vertical' ,
    //     'index' : index
    // }))
    // const horizontaChairList =[ ...new Array(parseInt(props.horizontalSize))].map((val,index) => ({
    //     'tableId' : props.tableId ,
    //     'orientation' : 'horizontal' ,
    //     'index' : index
    // }))



  
    // const verticalSideChairs =

    return(

        <Container></Container>

        // <div>

        //     <PickUpChairs verticalSize="5" ></PickUpChairs>
        // </div>

    )
}



function PickUpChairs(props){
    const ChairList =[ ...new Array(parseInt(props.verticalSize))].map((val,index) => ({
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