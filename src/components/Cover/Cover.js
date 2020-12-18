import React from 'react';
import Jumbo from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import sport from "../../assets/sport.jpg"
const Styles = styled.div`
.jumbo{
    background: url(${sport}) no-repeat bottom;
    background-size: cover;
    color: white;
    height: 500px;
    position: relative;
    z-index: -2;

    }

h1{
    font-size: 5rem;
    }

.overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1
}
@media (max-width: 780px){
    h1{
        font-size: 3rem;
    }
}

}
`
const Cover = ({children}) => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo d-flex align-items-center m-0">
                <div className="overlay"></div>
                <Container className="d-flex justify-content-center text-center">
                    <h1 className="d-flex">{children}</h1>
                </Container>
            </Jumbo>
        </Styles>
  
    );
};

export default Cover;