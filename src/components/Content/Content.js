import React from 'react';
import Col from 'react-bootstrap/Col';

const Content = ({children}) => {
    return (
        <Col className="mb-5 mw-100%" lg={12} xl={10}>
            {children}
        </Col>
    );
};

export default Content;
