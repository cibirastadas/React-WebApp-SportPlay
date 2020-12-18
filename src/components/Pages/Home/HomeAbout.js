import React from 'react';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import styled from 'styled-components';

const ImageWidth = styled.div`
.card{
    border: none;
}

.card-title{
   
    font-size: 2rem;
}
.card-text{
    font-weight:700;
    color:black;
    font-size: 1rem;
}
a{
    letter-spacing: 3px;
}
img{
    height: 300px;
    object-fit:cover;
}
}`

const HomeAbout = () => {
    return (
        <>
        <ImageWidth>
            <Card className="card bg-dark text-white mb-5 mt-5">
            <Card.Img src="https://www.sportireland.ie/sites/default/files/styles/widescreen_television/public/2020-06/ball.jpg?h=f29555f0&itok=qmsaBtbp" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Sužinokite daugiau apie mus</Card.Title>
                <Card.Text>
                    Pas mus galimą isigyti hantelių, svorinių liemenių, jogos kilimelių už priimtina kainą
                </Card.Text>
                <Card.Text >Norėdami išssirinkti prekę spauskite čia</Card.Text>
                <Button variant="secondary" href="/products">Produktai</Button>
            </Card.ImgOverlay>
            </Card>
        </ImageWidth>
        </>
    );
};

export default HomeAbout;