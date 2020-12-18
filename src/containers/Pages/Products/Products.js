import React from 'react'
import Aside from '../../../components/Aside/Aside'
import Content from '../../../components/Content/Content'
import Cover from '../../../components/Cover/Cover'
import Layout from '../../../components/Layout/Layout'
import ProductsDisplay from '../../../components/Pages/Products/ProductDisplay/ProductsDisplay'

const Products = () => {



    return (
        <>
        <Cover>Produktai</Cover>
        <Layout>
            <Aside>
                <p>Mūsų produktams taikoma 12 menesių garantija</p>
                <p>Pristatymas vykdomas visuose Lietuvos miestuose</p>
            </Aside>
            <Content>
                <ProductsDisplay/>
            </Content>
        </Layout>
    
        </>
    )
}
export default Products