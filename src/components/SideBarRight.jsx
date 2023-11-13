import React from 'react';
import { Row,Col, Container } from 'react-bootstrap';
import {InfoSquareFill}  from "react-bootstrap-icons"


const SideBarRight = () => {
    return (
         <Container>
    <Row>
      <Col className='mt-2'>
    <div className="p-4 border border-bottom " style={{ backgroundColor: ' #f3f3f3' }}   >
      <div className="">
       <div className='d-flex justify-content-between'>
        <h5 className="mt-3 ms-3">Linkedln Notizie</h5> 
       <InfoSquareFill className='me-3'/>
      </div>
      </div>
      <ul>
        <li>Single e fieri di esserlo</li>
        <p className='text-secondary'>3 giorni fa </p>
         <li>Che cosa vuole l'Italia dall'AI</li>
        <p className='text-secondary'>3 giorni fa </p>
         <li>PayPal si allarga alle bollette</li>
        <p className='text-secondary'>7 ore fa  </p>
         <li>Impennata degli attacchi informarici</li>
        <p className='text-secondary'>5 giorni fa </p>
         <li>I primi supermercati senza casse</li>
        <p className='text-secondary'>3 giorni fa </p>
         <li>Innovazione,ricerca e sviluppo</li>
        <p className='text-secondary'>1 ora fa </p>
        
      </ul>
      </div>
     </Col>
     <Col xs={12} className='mt-2 d-flex gap-2' >
       <div>
      <p className='text-secondary text-center'>Informazioni</p>
    </div>
        <p className='text-secondary text-center'>Accessibilità</p>
      <div>
      <p className='text-secondary text-center'>Centro Assistenza Privacy e Accessibilità</p>
    </div>
     </Col>
   </Row>
   </Container>
   
    )
}
export default SideBarRight 
