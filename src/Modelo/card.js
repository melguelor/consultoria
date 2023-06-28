import { Card} from "react-bootstrap"
import Button from 'react-bootstrap/Button';





export default function Quadro(props)
{
    return (
        <Card style={{ width: '18rem', }} className="bg-transparent ">
      <Card.Img variant="top" src={props.imagem} style={{ width: props.porcentagem }} className=" mx-auto"/>
      <Card.Body className="bg-transparent">
        <Card.Title >{props.titulo}</Card.Title>
        <Card.Text>
        {props.texto}
        </Card.Text>
        
      </Card.Body>
    </Card>









    )






}