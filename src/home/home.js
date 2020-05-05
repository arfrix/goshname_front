import React from 'react'
import Table from './table/table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home (){
    return(
        

        <Container fluid>
            <Row>
                <Col lg={1}>login</Col>
                <Col lg={10}>space</Col>
                <Col lg={1}>logo</Col>
            </Row>
            <Row >
                <Col lg={2}>
                    <div className="home-tab-box">ناهار خوری</div>
                    <div className="home-tab-box">اتاق جلسات</div>
                    <div className="home-tab-box">صندلی شنی</div>
                </Col>
                <Col>
                    <Table verticalSize='1'  horizontalSize="1" tableId="a"></Table>
                    <Table verticalSize='1'  horizontalSize="1" tableId="a"></Table>
                    <Table verticalSize='3'  horizontalSize="1" tableId="a"></Table>
                </Col>
                <Col>
                    <Table verticalSize='3'  horizontalSize="1" tableId="a"></Table>
                    <Table verticalSize='1'  horizontalSize="1" tableId="a"></Table>
                    <Table verticalSize='1'  horizontalSize="1" tableId="a"></Table>
                </Col>
               
            </Row>
            
        </Container>
    )
}


export default Home