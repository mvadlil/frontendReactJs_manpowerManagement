import React, { Component } from 'react'
import { Button, Card, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import Jumbotron from '../../component/Jumbotron'
import { Link } from "react-router-dom";
import { RootContext } from '../../App.js'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        }
    }
    render() { 
        return (  
            <RootContext.Consumer>
                {
                    value => {
                        return(
                            <>
                                <Jumbotron />
                                <Container className="mb-4 pb-3">
                                    <hr />
                                    <div className="text-center">
                                        <h1 >Tour Available</h1>
                                    </div>
                                    <hr />
                                    <Row>
                                        {/* jobs */}
                                        {value.state.tourList.map((x,i) => (
                                            <Col className="mt-3">
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src={x.image} />
                                                    <Card.Body>
                                                        <Card.Title>{x.tourName}</Card.Title>
                                                    </Card.Body>
                                                    <ListGroup className="list-group-flush">
                                                        <ListGroupItem>{x.periode}</ListGroupItem>
                                                        <ListGroupItem>{x.totalPax} Pax</ListGroupItem>
                                                        <ListGroupItem>{x.route}</ListGroupItem>
                                                    </ListGroup>
                                                    <Card.Body>
                                                        <Link to="detail"><Button variant="success" className="ml-2" onClick={() => value.setDetailIndex(i)}> Detail </Button></Link>
                                                        <Button variant="success" className="ml-2" onClick={() => value.applyJob(i)}>Apply Job</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Container>
                            </>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}
 
export default Home;