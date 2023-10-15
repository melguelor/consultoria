import { Row,Col, Button, Table } from "react-bootstrap";
import Pagina from "../Modelo/Pagina";
import './telasimulador.css'

export default function TelaEscolhaSimulador()
{
    return(<>
        <Pagina >
            <Row >
            <p>RENDA FIXA</p>
               <Col >
                <Button className="botao btn">Juros Compostos</Button>
            </Col>

            <Col >
                <Button className="botao btn">CDB - LCI/LCA</Button>
            </Col>

            

          
            </Row>

            <Row>
                <p>RENDA VARIAVEL</p>
            <Col >
                <Button  className="botao">FII</Button>
            </Col>

            <Col >
                <Button  className="botao">Ações</Button>
            </Col>

            
            </Row>

            <Row>
                <p>DIVERSOS</p>
                <Col >
                <Button className="botao">Aposentadoria</Button>
            </Col>

            <Col >
                <Button className="botao">Objetivo</Button>
            </Col>

                

            </Row>

            <Row>
               
                <Col >
                <Button className="botao">quanto falta</Button>
            </Col>

            <Col >
                <Button className="botao">Ações</Button>
            </Col>

            <Col>
                <Button  className="botao">Tesouro Direto</Button>
            </Col>

            </Row>

            <Row>
                <p>COMPARAR INVESTIMENTOS</p>
            </Row>

            

        </Pagina>
        </>)
}