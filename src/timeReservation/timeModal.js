
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from './tab/tab'






function TimeModal(props) {


    const tabsInfo_init = [
        {isSelected: true , name: 'صبح' },
        {isSelected: false , name: 'ظهر'},
        {isSelected: false , name: 'عصر'}
    ]

    const [tabsInfo , setTabsInfo] = useState(tabsInfo_init)

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
                setTabsInfo(
                    [
                        {isSelected: true , name: 'صبح' },
                        {isSelected: false , name: 'ظهر'},
                        {isSelected: false , name: 'عصر'}
                    ]
                )
                break;
            case 1:
                setTabsInfo(
                    [
                        {isSelected: false , name: 'صبح' },
                        {isSelected: true , name: 'ظهر'},
                        {isSelected: false , name: 'عصر'}
                    ]
                )
                break;
            case 2:
                setTabsInfo(
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


    const timeCellInfo_init = [
        {startTime:'8:00' ,  onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'8:20' ,  onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'8:40' ,  onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'9:00' ,  onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'9:20' ,  onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'9:40' ,  onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'10:00' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'10:20' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'10:40' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'11:00' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'11:20' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'11:40' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'12:00' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'12:20' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'12:40' , onWitchPartOfDay:'morning' ,situation:''},
        {startTime:'13:00' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'13:20' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'13:40' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'14:00' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'14:20' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'14:40' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'15:00' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'15:20' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'15:40' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'16:00' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'16:20' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'16:40' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'17:00' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'17:20' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'17:40' , onWitchPartOfDay:'noon' ,situation:''},
        {startTime:'18:00' , onWitchPartOfDay:'afternoon' ,situation:''},
        {startTime:'18:20' , onWitchPartOfDay:'afternoon' ,situation:''},
        {startTime:'18:40' , onWitchPartOfDay:'afternoon' ,situation:''},
    ]

    const [timeCellInfo , setTimeCellInfo] = useState(timeCellInfo_init)

    function TimeCellsPicker(){
        return(
            timeCellInfo.map((val)=>
                <Cell {...val}></Cell>
            )
        )

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
                        {TabsPicker(tabsInfo)}
                    </Col>
                    <Col lg={6}>
                        {TimeCellsPicker()}
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
  



  export default TimeModal