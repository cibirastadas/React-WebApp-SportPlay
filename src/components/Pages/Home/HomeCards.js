import React from 'react';
import styled from "styled-components"
import SectionTitle from "../../SectionTitle/SectionTitle"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
const Styles = styled.div`
    .card{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
       
    }
    .card-deck{
        max-width:100%;
        margin: 2rem 0.5rem;
        
    }
    img{
        object-fit:cover;
        height:250px;
        border-radius: 20% 50%
    }
    @media (max-width: 768px){
        img{
            border-radius: 0;
        }
    }
}

`

const HomeCards = () => {
    return (
        <Styles>
                <SectionTitle layout="justify-content-center">Mes dirbame jums</SectionTitle>
                <CardDeck className=" d-flex flex-column flex-md-row" style={{ maxWidth: '100%' }}>
                <Card className="mt-3">
                    <div className="imagee">
                    <Card.Img variant="top" src="https://www.nop4you.com/images/thumbs/0001669_discount-plugins.png" />
                    </div>
                    
                    <Card.Body>
                    <Card.Title>Nuolaidos</Card.Title>
                    <Card.Text >
                    Pas mus rasite didžiausias nuolaidas Lietuvoje. Apsiperkant už daugiau nei 30 €, taikome nuolaida 20% visoms prekems
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted text-center">Sutaupykite jau dabar</small>
                    </Card.Footer>
                </Card>
                <Card className="mt-3">
                    <Card.Img  variant="top" src="https://livingwellaware.com/wp-content/uploads/2020/03/Happy.jpg" />
                    <Card.Body>
                    <Card.Title>Garantija</Card.Title>
                    <Card.Text>
                        Suteikiame garantija visoms sporto prekėms iki 12mėn
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted text-center">12mėn garantija</small>
                    </Card.Footer>
                </Card>
                <Card className="mt-3">
                    <Card.Img   variant="top" src="https://www.diiiz.com/img/cms/diiiz%20free%20delivery%20review.jpg" />
                    <Card.Body>
                    <Card.Title>Pristatymas</Card.Title>
                    <Card.Text>
                        Pristatymas vyksta visuose Lietuvos miestuose. Išssirinkite prekę, o mes pasirūpinsime, kad ji saugiai pasiektų jūsu namus
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted text-center">Pristatymas visuose Lietuvos miestuose</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
      </Styles>
    );
};

export default HomeCards;