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

            <table className="mx-aut">
    <thead>
        <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Idade</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Douglas</td>
            <td>Toledo</td>
            <td>29</td>
        </tr>
        <tr>
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>35</td>
        </tr>
    </tbody>
</table>


        </Pagina>
        </>)
}