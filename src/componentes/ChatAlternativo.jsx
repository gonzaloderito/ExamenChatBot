//ESTE ES UN CHATBOT CREADO ALTERNATIVAMENTE DONDE SU FUNCION ES ENVIAR MENSAJES Y GUARDARLOS 



import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import estilos from './estilos/EstilosChat.css';
import ChatBot from '../img/Chatbot3.png';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <Container fluid>
      <Row className="chat-container">
        <Col xs={12} md={6} className="image-container">
          <Image src={ChatBot} alt="Imagen a la izquierda" fluid />
        </Col>
        <Col xs={12} md={6} className="chat-box">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Escribe un mensaje..."
                value={newMessage}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-2">
              Enviar
            </Button>
            <Button
              variant="danger"
              className="mt-2 ml-2"
              onClick={handleClearMessages}
            >
              Borrar Mensajes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
