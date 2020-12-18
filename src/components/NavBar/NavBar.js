import React from 'react'
import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"
import styled from "styled-components"
const Styles = styled.div`
.navbar{
    background-color : black;
}
.navbar-brand, .navbar-nav .nav-link{
    color: #bbb;
    &:hover{
        color:white;
    }
}
.navbar-toggler{
    background-color : white;;
}
`
const NavBar = () => {


        return (
            <>
            <Styles>
                <Navbar fixed="top" expand="md" className="p-2">
                    <Navbar.Brand href="/">PlaySport.lt</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Pradinis</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/products">Produktai</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">Apie mus</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contacts">Kontaktai</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/settings">Nustatymai</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
                </Navbar>
            </Styles>
        </>
        )
    }
export default NavBar