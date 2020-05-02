import React from 'react'
import Chair from './chair/chair'


function Table (props){
    console.log(props)
    
    // ! is there any to declear props types ?
    const verticalChairList =[ ...new Array(parseInt(props.verticalSize))].map((  val,index) => ({
        'tableId' : props.tableId ,
        'orientation' : 'vertical' ,
        'index' : index
    }))



    console.log(verticalChairList)
    // const verticalSideChairs =

    return(

        <div></div>

    )
}



export default Table