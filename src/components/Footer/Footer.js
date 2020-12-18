import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from "styled-components"

const Color = styled.div`
    
    .container-fluid{
        background-color: #5e82a6;
    }  
    
    .container-fluid.text-center{
        background-color: #7e9bb8;
    }  
    
    i{
        color: white;
    }
}`
const Footer = () => {

    return (
        <Color>
              <Container fluid className="p-0">
                  <Row className="m-0">
                      <Col md={12} className="d-flex justify-content-center py-5">
                        <a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>

                        <a href="https://www.twitter.com/"  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                
                        <a href="https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
            
                        <a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a href="https://www.youtube.com/"  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                    </Col>
                </Row>
                <Container fluid className="text-center p-2 w-100">© 2020 Visos teises saugomos PlaySport.lt</Container>
            </Container>
        </Color>
 
);
    }
export default Footer;