import React from 'react'
import Aside from "../../../components/Aside/Aside"
import Cover from '../../../components/Cover/Cover'
import Layout from '../../../components/Layout/Layout'
import AboutInfo from '../../../components/Pages/About/AboutInfo/AboutInfo'
import Content from "../../../components/Content/Content"
const About=()=> {
    return (
        <>
        <Cover>Apie mus</Cover>
        <Layout>
            <Aside>
                <p> Mes dribame jau ilgą laiką ir mums svarbu, kad klientas liktų patenkintas</p>
                <p>Pristatymas vykdomas visuose Lietuvos miestuose</p>
            </Aside>
            <Content>
                <AboutInfo/>
            </Content>
        </Layout>
        </>
    )
}
export default About