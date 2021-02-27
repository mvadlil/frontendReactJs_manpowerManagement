import React, { Component } from 'react'
import { Container, Jumbotron, Accordion, Card, Button, Table } from 'react-bootstrap';
import { RootContext } from '../../App.js'
import { Link } from "react-router-dom";

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <RootContext.Consumer>
                {
                    value => {
                        const index = value.state.detailIndex
                        return(
                            <>
                                <Jumbotron style={{ backgroundImage: `url(${value.state.tourList[index].panorama})`, backgroundSize: 'cover', height: 400, marginTop: 30 }} fluid>
                                    <Container>
                                        <h1>{value.state.tourList[index].tourName}</h1>
                                    </Container>
                                </Jumbotron>

                                <Container className="mb-5 pb-5">
                                    <Accordion defaultActiveKey="0">
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                Tour Specification
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <Table striped bordered hover>
                                                        <thead>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Item</th>
                                                                <th>Value</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Tour Name</td>
                                                                <td>{value.state.tourList[index].tourName}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Periode of Tours</td>
                                                                <td>{value.state.tourList[index].periodes}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Total Days</td>
                                                                <td>{value.state.tourList[index].totalDays}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Total Pax</td>
                                                                <td>{value.state.tourList[index].totalPax}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>Route</td>
                                                                <td>{value.state.tourList[index].route}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>6</td>
                                                                <td>Tour Leader Fee</td>
                                                                <td>{value.state.tourList[index].tourLeaderFee}</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                Tour Itinerary
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <Table striped bordered hover>
                                                        <thead>
                                                            <tr>
                                                                <th>Day</th>
                                                                <th>Route</th>
                                                                <th>Itinerary</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {value.state.tourList[index].itinerary.map((x,i) => (
                                                                <tr>
                                                                    <td>{x.day}</td>
                                                                    <td>{x.route}</td>
                                                                    <td>{x.detail}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                                Tour Location
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>
                                                    <iframe src={value.state.tourList[index].location} width="1050" height="550" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                                Download Tour Itinerary
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body>
                                                    <Link to={value.state.tourList[index].download} target="_blank" download>Download</Link>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Container>
                            </>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}
 
export default DetailPage;