import React from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import SectionTitle from '../../SectionTitle/SectionTitle';
import styled from 'styled-components';
import {FormValidation} from "../../FormValidation"
import {FormTextAreaValidation} from "../../FormValidation"
import { useForm } from 'react-hook-form';


const FormWidth = styled.div`
.form{
    width: 70%;
}

@media (max-width:575px){
    .form{
        width: 70%;
    }
}

@media (max-width:400px){
    .form{
        width: 100%;
    }
}
button{
    letter-spacing: 0.3rem;
}}`

const ContactsForm = () => {
    const {register, handleSubmit, errors, watch} = useForm();
    const onSubmit = data=>{
        alert('Sėkmingai gavome jūsų užklausą\n\n' + JSON.stringify(data, null, 4));
    }

    return (
        <FormWidth>
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <SectionTitle>Ar turite klausimų?</SectionTitle>
            <Form.Row className="d-flex flex-column flex-md-row">
            <Col xl={8}>
                <Form.Group controlId="name">
                    <Form.Label>Naudotojo vardas</Form.Label>
                    <Form.Control name="name" ref={register(FormValidation("Naudotojo vardas"))} type="text" placeholder="Naudotojo vardas" />
                    <p className="text-danger">{errors.name && errors.name.message}</p>
                </Form.Group>
            </Col>
            <Col xl={8}>
                <Form.Group controlId="email">
                    <Form.Label>Elektroninis paštas</Form.Label>
                    {/* 1. Registruoju visus inputus */}
                    <Form.Control name="email" ref={register(FormValidation("Elektroninis paštas"))} type="email" placeholder="Elektroninis paštas" />
                    <p className="text-danger">{errors.email && errors.email.message}</p>
                        <Form.Text className="text-muted">
                            Nesidalinkite savo elektroiniu paštu su niekuom
                        </Form.Text>
                </Form.Group>
            </Col>
            <Col xl={6}>
                <Form.Group controlId="password">
                    <Form.Label>Slaptažodis</Form.Label>
                    <Form.Control name="password" ref={register(FormValidation("Slaptažodis"))} type="password" placeholder="Slaptažodis" />
                    <p className="text-danger">{errors.password && errors.password.message}</p>
                </Form.Group>
            </Col>
            <Col xl={6}>
                <Form.Group controlId="repeatPassword">
                    <Form.Label>Pakartotinis slaptažodis</Form.Label>
                    <Form.Control name="repeatedPassword" ref={register({validate: (value) => value === watch('password')})} type="password" placeholder="Pakartotinis slaptažodis" />
                    <p className="text-danger">{errors.repeatedPassword && "Pakartoinis slaptažodis nesutampa"}</p>
                </Form.Group>
            </Col>
            <Col xl={12} className="mb-2">
            <Form.Label>Ar turite klausimų apie užsakymą ?</Form.Label>
                <Form.Check
                    type="radio"
                    label="Taip"
                    name="about"
                    id="radio1"
                    value="Taip"
                    ref={register(FormValidation("Pasirinkimas"))}
                />
                <Form.Check
                    type="radio"
                    label="Ne"
                    name="about"
                    id="radio2"
                    value="Ne"
                    ref={register(FormValidation("Pasirinkimas"))}
                />
                <p className="text-danger">{errors.about && errors.about.message}</p>
            </Col>
            <Col xl={12}>
                <Form.Group controlId="textArea">
                    <Form.Label>Žinutė</Form.Label>
                    <Form.Control name="message" ref={register(FormTextAreaValidation())} as="textarea" rows={5} />
                <p className="text-danger">{errors.message && errors.message.message}</p>
                </Form.Group>
            </Col>
            </Form.Row>
            <Button variant="primary" type="submit">
                Pateikti
            </Button>
        </Form>
      </FormWidth>
        
    );
};

export default ContactsForm;