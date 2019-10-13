import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link disabled href="/home"><b>CarbonX</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">
                    <Link to="/">Home</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
        </Nav >
    );
}

export default Header;