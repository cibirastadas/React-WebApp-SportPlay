import React from 'react';
import SectionTitle from "../../../SectionTitle/SectionTitle"
import styled from "styled-components"
import ProductBlock from "../ProductBlock/ProductBlock"
import {weight, vest, mat} from "../ProductData/ProductData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
const Border = styled.div`
.title{
    text-transform: uppercase;
}
.shadow{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
}
`
const weights = weight.map((data,index)=>{
    return <ProductBlock key={index} data={data}/>
})
const vests = vest.map((data,index)=>{
    return <ProductBlock key={index} data={data}/>
})
const mats = mat.map((data,index)=>{
    return <ProductBlock key={index} data={data}/>
})

const ProductsDisplay = () => {
    return (
        <>
        <Border>
            <Container fluid="true" className="cont justify-content-center" >
                <SectionTitle layout="justify-content-center">Hanteliai</SectionTitle>
                <Row style={{ marginLeft: 0, marginRight: 0, maxHeight: "100%",  }} className="mb-3">
                    {weights}
                </Row >
                <SectionTitle layout="justify-content-center">Svorinės liemenės</SectionTitle>
                <Row style={{ marginLeft: 0, marginRight: 0 }} className="mb-3">
                    {vests}
                </Row >
                <SectionTitle layout="justify-content-center">Kilimėliai mankštai</SectionTitle>
                <Row style={{ marginLeft: 0, marginRight: 0 }} className="mb-3">
                    {mats}
                </Row>
            </Container>   
        </Border>
        </>
    );
};

export default ProductsDisplay;