import React, {useState} from 'react';
import Form from "react-bootstrap/Form"
import Cover from '../../../components/Cover/Cover'
import Aside from "../../../components/Aside/Aside"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import Content from '../../../components/Content/Content';
import Layout from '../../../components/Layout/Layout';
import Cookies from "js-cookie"
const Settings = ({readCookie}) => {
    const [option, setOption] = useState({
        headingSize : "",
        advertising : "",
        headingColor: ""
    })


    const handleChange = async (event)=>{
        const { name, value} = event.target
        setOption({...option, [name] : value})
        if(name === "headingSize"){
            Cookies.set('headingSize', value ,{ expires: 2 });
            alert(`Antraštės dydis buvo sėkmingai pakeistas`);
        }
        if(name === "headingColor"){
            Cookies.set('headingColor', value ,{ expires: 2 });
            alert(`Antraštės spalva buvo sėkmingai pakeista`);
        }
        if(name === "advertising"){
            Cookies.set('advertising', value ,{ expires: 2 });
            alert(`Reklamos juosta buvo sėkmingai pakeista`);
        }
        readCookie()
       
    }
    return (
        <>
        <Cover>Nustatymai</Cover>
        <Layout>
            <Aside>
                <p>Kreipkitės į mus del platesnės informacijos ir mes jums padėsime</p>
                <p>Adresas: Savanoriu pr. 157A</p>
                <p>Telefonas: +37064879887</p>
                <p>Darbo laikas: I - V 07:00-17:00h VI-VII 12:00 - 17:00</p>
            </Aside>
            <Content>
                <SectionTitle>Pasirinkite vieną iš nustatymų</SectionTitle>
                <Form.Group controlId="headingSize">
                    <Form.Label>Pakeisti antraščių dydžius</Form.Label>
                    <Form.Control as="select" name="headingSize"  onChange={(event)=>handleChange(event)}>
                        <option value="">Pasirinkite</option>
                        <option value="headingSize1">1</option>
                        <option value="headingSize2">2</option>
                        <option value="headingSize3">3</option>
                        <option value="headingSize4">4</option>
                        <option value="headingSize5">5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="headingColor">
                    <Form.Label>Pakeisti antraščių spalvą</Form.Label >
                    <Form.Control as="select" name="headingColor" onChange={(event)=>handleChange(event)}>
                        <option value="">Pasirinkite</option>
                        <option value="headingColorB">Juoda</option>
                        <option value="headingColorY">Geltona</option>
                        <option value="headingColorBl">Mėlyna</option>
                        <option value="headingColorG">Žalia</option>
                        <option value="headingColorGr">Pilka</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="headingColor">
                    <Form.Label>Pakeisti reklamos juostos spalvą</Form.Label>
                    <Form.Control as="select" name="advertising" onChange={(event)=>handleChange(event)}>
                        <option value="">Pasirinkite</option>
                        <option value="advertisingB">Juoda</option>
                        <option value="advertisingY">Geltona</option>
                        <option value="advertisingBl">Mėlyna</option>
                        <option value="advertisingG">Žalia</option>
                        <option value="advertisingGr">Pilka</option>
                    </Form.Control>
                </Form.Group>
            </Content>
        </Layout>
        </>
    );
};

export default Settings;