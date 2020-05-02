import React from 'react'
import Chair from './chair/chair'


function Table (props){
    console.log(props)
    
    // ! is there any to declear props types ?
    const verticalChairList =[ ...new Array(parseInt(props.verticalSize))].map((val,index) => ({
        'tableId' : props.tableId ,
        'orientation' : 'vertical' ,
        'index' : index
    }))
    const horizontaChairList =[ ...new Array(parseInt(props.horizontalSize))].map((val,index) => ({
        'tableId' : props.tableId ,
        'orientation' : 'horizontal' ,
        'index' : index
    }))



    console.log(verticalChairList)
    console.log(horizontaChairList)
    // const verticalSideChairs =

    return(

        <div></div>

    )
}



export default Table