import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import firebase from '../fireBase/firebase'


function FinalAcceptModal(props){
    


    async function submit(){
        try {
            await firebase.addReservation()
        } catch (error) {
            alert('reed')
            console.log(error)
        }
    }


    return (
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          className="rtl"
        >
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter" >
              تایید نهایی
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Container>
                  <Row>
                      <Col className="">
                          {props.timeCell}
                      </Col>
                  </Row>
              </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>اوه اوه نه</Button>
            <Button variant="success" onClick={submit}>تایید</Button>
          </Modal.Footer>
        </Modal>
    );
    
}


export default FinalAcceptModal