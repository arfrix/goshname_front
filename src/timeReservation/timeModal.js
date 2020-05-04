
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from './tab/tab'






function TimeModal(props) {


    const dayPartSelection_init = [
        {isSelected: true , name: 'صبح' },
        {isSelected: false , name: 'ظهر'},
        {isSelected: false , name: 'عصر'}
    ]

    const [dayPartSelection , setDayPartSelection] = useState(dayPartSelection_init)



    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col lg={5}></Col>
                    <Col lg={1}>
                        {TabsPicker(dayPartSelection)}
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>بیخیال</Button>
          <Button variant="success" onClick={props.onHide}>تایید</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function TabsPicker(list){
    return(
        list.map((val , index) =>
        <Tab key={index} {...val} tabSelector={()=> alwayesOneTabSelected(index)} ></Tab>
        )    
    )
  }
  function alwayesOneTabSelected(witchOneClicked){
      switch (witchOneClicked) {
          case 0:
              console.log("صبح")
              break;
          case 1:
              console.log("ظهر")
              break;
          case 2:
              console.log("عصر")
              break;
      
          default:
              break;
      }

  }



  export default TimeModal