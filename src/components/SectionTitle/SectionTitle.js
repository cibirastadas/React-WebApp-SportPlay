import React from 'react';
import styled from 'styled-components';

const Title = styled.div`

@media (max-width: 768px){
    h2{
        font-size: 2.5rem!important;
    }

@media (max-width: 575px){
    h2{
        font-size: 2rem!important;
    }
}
}`
const SectionTitle = ({children,layout}) => {
    return (
            <Title>
                <h2 className={`display-3 p-2 title d-flex ${layout}`}id="title">{children}</h2>
            </Title>
    );
};

export default SectionTitle;