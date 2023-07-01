import { Button, Modal } from "react-bootstrap"
import React, { useState } from 'react';
import { Link } from "react-router-dom";




export default function ModalModelo(props)
{

    const [showModal, setShowModal] = useState(true);
    const [esconder,setEsconder] = useState('hidden')

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    let botao2 = props.botao_2
if(props.botao_2 == "")
    {botao2=    document.getElementsByClassName('botao_2')
    
}



  return( 
  <Modal  show={true} onHide={handleCloseModal} >
      <Modal.Header className="mx-auto">
        {props.titulo}
      </Modal.Header>

      <Modal.Body className="mx-auto">
        {props.corpo}
      </Modal.Body>

      <Modal.Footer className="mx-auto">
      <Link to={'/'}>
          <Button variant="secondary" onClick={handleCloseModal} className="botao_1" >
            {props.botao_1}
          </Button>
          </Link>



             
          <Button variant="primary"  className="botao_2 " hidden={esconder} >
           {botao2}
          </Button>
                         
        {props.pe}
      </Modal.Footer>
    </Modal>
    
 ) 



}