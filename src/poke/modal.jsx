import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import './modal.css'


function DetailModal(props) {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" >
            <div className={props.type}>


                <Modal.Header closeButton>

                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='show-grid' >
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                <img className='poke' src={props.image} />

                            </Col>
                            <Col xs={6} md={4}>
                                <div>
                                    {/* <h4>{props.stats[0].stats.name}</h4>  */}
                                    {/* {props?.stats[0]?.base_stat} */}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>

                            </Col>
                            <Col xs={6} md={4}>
                               
                            </Col>
                            <Col xs={6} md={4}>
                                <div>
                                <h5>Defens</h5>
                                 
                                </div>
                            </Col>
                        </Row>
                        <Row><br /></Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </div>
        </Modal>
    );

}
export default DetailModal;