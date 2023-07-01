import { Button, Col, Container, DropdownButton, Form, InputGroup, Row, Table, Dropdown } from "react-bootstrap"
import Pagina from "../../Modelo/Pagina"
import '../simulador.css'

export default function CDB(props)
{



//{selection === 'mes' ? 'Mês' : 'Ano'}
    return(
        <Pagina>
            <Container className="col-12 border mt-1">
               <Form className=" mx-auto border"> 
               <Row className="col-sm-5 mx-auto">
                <Col>
                    <InputGroup >
                        <InputGroup.Text >Valor</InputGroup.Text>
                        <Form.Control  />
                    </InputGroup>
                
                </Col>

                </Row>

                <Row className="col-sm-5 mx-auto mt-3">
                <Col>
                    <InputGroup >
                        <InputGroup.Text >Periodo</InputGroup.Text>
                        <Form.Control  />
                        
                        <DropdownButton  title="Mês">
                            <Dropdown.Item>2021</Dropdown.Item>
                            <Dropdown.Item>2021</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                
                </Col>

                </Row>


                <Row className="col-sm-5 mx-auto mt-3">
                <Col>
                    <InputGroup >
                        <InputGroup.Text >CDI %</InputGroup.Text>
                        <Form.Control  />
                        
                        <DropdownButton  title="Mês">
                            <Dropdown.Item>ao ano</Dropdown.Item>
                            <Dropdown.Item>ao mes</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                
                </Col>

                </Row>
           
            
            <Button>Simular</Button>
           </Form>
     
                    <div className=" "> 

                    
                <table className=" mx-auto"    size="sm" >
            <thead className="tabela ">
                <tr  className="borda ">
                    <th className="borda p-1" >Mês</th>
                    <th className="borda p-1">Juros</th>
                    <th className="borda p-1">Total</th>
                    
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td  className="borda p-1">1</td>
                    <td className="borda p-1">R$ 24,33</td>
                    <td className="borda p-1">45,33</td>
                    
                </tr>
                
            </tbody>
        </table>
</div>
       
</Container>
        </Pagina>
    )
}