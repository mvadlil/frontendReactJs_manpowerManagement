import React, { Component } from 'react'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        }
    }
    render() { 
        return (  
            <>
                <Navbar bg="success" variant="dark" style={{ minWidth: 700 }} fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Manpower Management</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link to="/home"><Nav style={{ color:'white' }}>Home</Nav></Link>
                        </Nav>
                        <Form inline>
                            <Link to="/myjob"><Button variant="success">My Jobs</Button></Link>
                        </Form>
                    </Container>
                </Navbar>
            </>
        );
    }
}
 
export default Header;