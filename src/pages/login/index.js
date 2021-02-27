import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mmLogo from '../../images/mm.png'
import { Link } from "react-router-dom";
import './index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }
    render() { 
        return (  
            <>
            <Container className="text-center">
                <Row>
                    <Col>
                        <img
                            src={mmLogo}
                            width="300"
                        />
                        <h1>Manpower Management</h1>
                    </Col>
                </Row>
            </Container>

            <div className="outer">
                <div className="inner">
                    <form>
                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            </div>
                        </div>

                        <Link to="/home"><button type='button' className="btn btn-success btn-lg btn-block">Sign in</button></Link>
                    </form>
                </div>
            </div>
            </>
        );
    }
}
 
export default Login;