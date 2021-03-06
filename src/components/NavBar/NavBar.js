import React from 'react'
import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"
import styled from "styled-components"
import {Link} from "react-router-dom"
const Styles = styled.div`
.navbar{
    background-color : black;
}
.navbar-light .navbar-brand, .navbar-light .navbar-nav .nav-link{
    color: #bbb;
    &:hover{
        color:white;
    }
}
`
const NavBar = () => {


        return (
            <>
            <Styles>
                <Navbar fixed="top" expand="md" className="p-2">
                    <Navbar.Brand as={Link} to="/">PlaySport.lt</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto links">
                            <Nav.Item><Nav.Link  as={Link} to="/">Pradinis</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link  as={Link} to="/products">Produktai</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link  as={Link} to="/about">Apie mus</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link  as={Link} to="/contacts">Kontaktai</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link  as={Link} to="/settings">Nustatymai</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        </>
        )
    }
export default NavBar