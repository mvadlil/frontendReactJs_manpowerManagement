import React, { Component } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap';
import { RootContext } from '../../App.js'
import { Link } from "react-router-dom";
import './style.css'

class MyJobs extends Component {
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
                            <Container className="mt-5 pt-3">
                                <Row>
                                    <div className="col-md-4 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-column align-items-center text-center">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                                        className="rounded-circle" width="150" />
                                                    <div className="mt-3">
                                                        <h4>Muhammad Fadlil</h4>
                                                        <p className="text-secondary mb-1">Tour Leader</p>
                                                        <p className="text-muted font-size-sm">DKI Jakarta</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card mt-3">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            className="feather feather-globe mr-2 icon-inline">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="2" y1="12" x2="22" y2="12"></line>
                                                            <path
                                                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                                            </path>
                                                        </svg>Website</h6>
                                                    <span className="text-secondary">duatujuh.net</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            className="feather feather-twitter mr-2 icon-inline text-info">
                                                            <path
                                                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                                            </path>
                                                        </svg>Twitter</h6>
                                                    <span className="text-secondary">@mvadlil</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            className="feather feather-instagram mr-2 icon-inline text-danger">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>Instagram</h6>
                                                    <span className="text-secondary">@mvadlil</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            className="feather feather-facebook mr-2 icon-inline text-primary">
                                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                        </svg>Facebook</h6>
                                                    <span className="text-secondary">Muhammad Fadlil</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* ============================= */}
                                    <div className="col-md-8">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Full Name</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        Muhammad Fadlil
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Email</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        fadlilmuhammad27@gmail.com
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Mobile</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        0812 9046 5586
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Address</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        Jl. Sirsak No. 53 Jagakarsa
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* disini listjob */}
                                        <hr />
                                        <h4 className="ml-1"> My Tour Leader Jobs</h4>
                                        <hr />


                                        {value.state.myJob.map((x,i) => (
                                            <Card className="mb-3">
                                                <Card.Header as="h5">{x.tourName}</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{x.totalDays}</Card.Title>
                                                    <Card.Text>
                                                        {x.periode}
                                                    </Card.Text>
                                                    <Link to="detail"><Button variant="success" className="ml-2" onClick={() => value.setDetailIndex(i)}> Check Detail </Button></Link>
                                                    <Button variant="info" className="ml-2" disabled>Confirmed</Button>
                                                </Card.Body>
                                            </Card>
                                        ))}

                                    </div>
                                </Row>
                            </Container>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}
 
export default MyJobs;