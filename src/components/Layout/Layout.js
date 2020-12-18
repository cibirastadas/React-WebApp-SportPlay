import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


const Layout = ({children}) => {
    return (
        <Container fluid>
            <Row>
                {children}
            </Row>
        </Container>
     
    );
};

export default Layout;