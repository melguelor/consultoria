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
                <Button className="botao btn">CDB</Button>
            </Col>

            <Col >
            <Button  className="botao">LCI/LCA</Button>
            </Col>

            <Col className="col-5">
            <Button  className="botao">Tesouro Direto</Button>
            </Col>
            </Row>

            <Row>
                <p>RENDA FIXA</p>
            <Col >
                <Button  className="botao">FII</Button>
            </Col>

            <Col >
                <Button  className="botao">Ações</Button>
            </Col>

            <Col className="col-5">
                <Button className="botao" >Tesouro Direto</Button>
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

            <Col>
                <Button  className="botao">sdsds</Button>
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