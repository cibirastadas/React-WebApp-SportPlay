import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {FormValidation} from "../FormValidation"
import CustomModal from '../CustomModal/CustomModal';

const Aside = ({children}) => {
    
    /* Game */

    const [random, setRandom] = useState(0)
    const [guesses, setGuesses] = useState(0)
    const [steps, setSteps] = useState([])
    const [input, setInput] = useState("")

    /* Modal */

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {register, errors, handleSubmit} = useForm();

    const handleChangeNumber = () =>{
        if(input === random.toString()){
            alert(`Sėkmingai pavyko atspėti skaičių ${random}`)
            setGuesses("")
            setSteps([])
            randomNumber()
            
        }else{
            const value = input > guesses ? `mažesnis` : `didesnis`
            const step = <p>{guesses + 1} žingsnis: {input}, {value}</p>
            alert(`Spejimas ${guesses +1} buvo nesekmingas, bandykite dar kartą. Skaičius ${value}`)
            setSteps([...steps, step])
            setGuesses(prevState=>prevState + 1)
        }
        
    }

    const handleStep = (e) =>{
        const {value} = e.target
        setInput(value)
    }

    useEffect(()=>{
        randomNumber()
    },[])

    const randomNumber = ()=>{
        const random = Math.floor(Math.random() * 100) + 1;
       setRandom(random)
    }

    return (
            <Col className="d-flex flex-column justify-content-center align-items-center text-center bg-light py-5" xl={2} id="aside">
                {console.log(steps)}
                <div>
                    {children}
                </div>
                <hr  style={{
                        height: 5,
                        borderColor : '#aaa',
                        width: "100%"
                    }} 
                />
                <div className="d-flex flex-column">
                    <p style={{fontSize : "1.5rem"}} className="font-weight-bold">Atspėkite skaičių nuo 1 - 100</p>
                    <Form onSubmit={handleSubmit(handleChangeNumber)}>
                        <Form.Group  className="text-left" controlId="formBasicPassword">
                            <Form.Label>Reikšmė</Form.Label>
                            <Form.Control name="input" ref={register(FormValidation("Skaičius"))} type="number" placeholder="skaičius" onChange={handleStep}/>
                            <p className="text-danger">{errors.input && errors.input.message}</p>
                        </Form.Group>
                        <Button className="mr-2"type ="submit" variant="primary" > 
                            Spėti
                        </Button>
                        <Button variant="primary" onClick={handleShow}>
                           Spėjimai {guesses}
                        </Button>
                    </Form>
                </div>

                <CustomModal 
                    show={show}
                    handleClose={handleClose}
                    steps={steps}/>
            </Col>
    );
};

export default Aside;