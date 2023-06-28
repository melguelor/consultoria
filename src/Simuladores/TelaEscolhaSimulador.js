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

            <Table striped bordered hover size="sm"  >
      <thead >
        <tr >
          <th>Coluna 1</th>
          <th>Coluna 2</th>
          <th>Coluna 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dado 1</td>
          <td>Dado 2</td>
          <td>Dado 3</td>
        </tr>
        <tr>
          <td>Dado 4</td>
          <td>Dado 5</td>
          <td>Dado 6</td>
        </tr>
        {/* Adicione mais linhas conforme necessário */}
      </tbody>
    </Table>


        </Pagina>
        </>)
}