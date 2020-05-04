import React from 'react'
import Button from 'react-bootstrap/Button'





function Cell(props){


    return(
      <>
        <Button variant="outline-secondary" className="m-2">{props.startTime}</Button>
        {`   `}
      </>

    )
}


export default Cell