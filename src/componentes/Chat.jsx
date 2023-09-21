//ESTE CHAT ESTA INTEGRADO CON LA API DE CHATGPT, DEBIDO A QUE LA KEY DE LA API NO ME ANDA DECIDI DEJARLA CREADA PERO NO MOSTRARLA EN EL FRONT,
// EN CAMBIO DEJE UN DISEÑO DE CHATBOT DONDE EL USUARIO ENVIA MENSAJES, PERO QUERIA DEJAR ESTE CHAT PARACUMPLIR CON LOS REQUISITOS DE FUNCIONALIDAD  

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import Configuration, { OpenAI } from 'openai';
import { Row, Col, Form, Spinner} from 'react-bootstrap';
import OpenAIApi from 'openai';


 
const PARAMS ={
    temperature: 0.5,
    max_tokens: 256
}



const configuration = new Configuration({
    organization: "org-Uyq1NgghoD9HIyaYRxtSdkLT",
    apiKey : process.env.REACT_APP_OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();



const Chat = () => {
    const [questionType, setQuestionType] = useState('general')
    const [cbResponse, setCbResponse] = useState('')
    const [userInput, setUserInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    


    const getInstructions =(qt, input) => {
        let prompt;
        switch(qt){
            case 'general':
                prompt = input;
                break;
            case 'translate':
                prompt = `traslate this text to spanish: ${input}`
                break;
            case 'weather':
                prompt = `if the question is related to weather-answer :  ${input}`
                break;
            default:
                prompt = input
        }
    }

    const handleSendData = async(e) =>{
        e.preventDefault()
        setIsLoading(true)
        const prompt = getInstructions(questionType,userInput)
        const endpoint = "https://api.openai.com/v1/chat/completions";
        const body = {...PARAMS, prompt}

        const response = await fetch(endpoint,{
            method :'POST',
            headers:{
                'content-type': 'application/json',
                'Authorization': `Bearer ${configuration.apiKey}`
            },
            body: JSON.stringify(body)
        })

        const data = await response.json()

        setCbResponse(data.choices[0].text)
        setIsLoading(false)
    }



    return (
        <Container className='mt-3'>
            <Row>
                {['general', 'traslate', 'weather'].map(el => {
                    return (
                        <Col key={el}>
                            <Button variant="primary" onClick={() => { }}>{el}</Button>
                        </Col>
                    )
                })}
            </Row>

            <h3 className='my-3'>Question type: <b>{questionType}</b></h3>
             <Form onSubmit={handleSendData}>
                <Form.Control 
                type='text'
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                >

                </Form.Control>
                <Button variant ='info' type='submit' className='mt-3'>Enviar</Button>

             </Form>
             <div className='mt-3'>{isLoading ?
                <Spinner/>
                :
                cbResponse ? cbResponse: 'no question asked'
             }</div>
        </Container>
    );
}

export default Chat;