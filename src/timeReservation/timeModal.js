
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
                setDayPartSelection(
                    [
                        {isSelected: true , name: 'صبح' },
                        {isSelected: false , name: 'ظهر'},
                        {isSelected: false , name: 'عصر'}
                    ]
                )
                break;
            case 1:
                setDayPartSelection(
                    [
                        {isSelected: false , name: 'صبح' },
                        {isSelected: true , name: 'ظهر'},
                        {isSelected: false , name: 'عصر'}
                    ]
                )
                break;
            case 2:
                setDayPartSelection(
                    [
                        {isSelected: false , name: 'صبح' },
                        {isSelected: false , name: 'ظهر'},
                        {isSelected: true , name: 'عصر'}
                    ]
                )
                break;
        
            default:
                break;
        }
  
    }


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="rtl"
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter" >
            میتونی زمان مورد نظرت رو انتخاب کنی
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col lg={2}>
                        {TabsPicker(dayPartSelection)}
                    </Col>
                    <Col lg={6}>5</Col>
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
  



  export default TimeModal