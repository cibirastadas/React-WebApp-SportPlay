import React from 'react';
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
const ProductBlock = ({data}) => {
    return (
        <>       
            <Col xs={12} sm={6} md={4} lg={4} xl={4} style={{maxHeight: "100%"}}  className="mt-4">
                <Col className="col d-flex flex-column justify-content-between shadow" style={{minHeight: "100%", height : "100%"}} >
                    <div className="d-flex justify-content-center mt-2">
                        <Image  fluid={true} src={data.img}/>
                    </div>
                    <div>
                        <p className="title">{data.title}</p>
                        <p>{data.description}</p>
                        <p>{data.price}</p>
                    </div>
                </Col>
            </Col>
            
        </>
    );
};

export default ProductBlock;
