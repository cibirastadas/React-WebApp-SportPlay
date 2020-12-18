import React from 'react'
import ContactsForm from "../../../components/Pages/Contacts/ContactsForm"
import Cover from '../../../components/Cover/Cover'
import Layout from '../../../components/Layout/Layout'
import Aside from '../../../components/Aside/Aside'
import Content from '../../../components/Content/Content'

const Contacts = ()=>{
    
return ( 
    <>
        <Cover>Kontaktai</Cover>
        <Layout>
        <Aside>
            <p>Kreipkitės į mus del platesnės informacijos ir mes jums padėsime</p>
            <p>Adresas: Savanoriu pr. 157A</p>
            <p>Telefonas: +37064879887</p>
            <p>Darbo laikas: I - V 07:00-17:00h VI-VII 12:00 - 17:00</p>
        </Aside>
            <Content>
                <ContactsForm/>
            </Content>
            
        </Layout>
    </>
)}
export default Contacts