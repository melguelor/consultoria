import { Button, Col, Container, DropdownButton, Form, InputGroup, Row, Table, Dropdown } from "react-bootstrap"
import Pagina from "../../Modelo/Pagina"
import '../simulador.css'

export default function CDB(props)
{



//{selection === 'mes' ? 'Mês' : 'Ano'}
    return(
        <Pagina>

            <Container className="col-12  mt-1">
                <h1>Simulador CDB</h1>
               <Form className=" mx-auto "> 
               <Row className="col-sm-5 mx-auto">
                <Col>
                    <InputGroup >
                        <InputGroup.Text >Valor</InputGroup.Text>
                        <Form.Control  />
                    </InputGroup>
                
                </Col>

                </Row>

                <Row className="col-sm-5 mx-auto mt-3 ">
                <Col>
                    <InputGroup >
                        <InputGroup.Text >Periodo</InputGroup.Text>
                        <Form.Control  />
                        
                        <DropdownButton  title="Mês" className="botao btn-roxo">
                            <Dropdown.Item >ao ano</Dropdown.Item>
                            <Dropdown.Item>ao mês</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                
                </Col>

                </Row>

                <Row className="col-sm-5 mx-auto mt-3">
                <Col>
                    <InputGroup >
                        <InputGroup.Text >Taxa Selic</InputGroup.Text>
                        <Form.Control  />
                        <InputGroup.Text >Anual</InputGroup.Text>
                    </InputGroup>
                
                </Col>

                </Row>


                <Row className="col-sm-5 mx-auto mt-3">
                <Col>
                    <InputGroup >
                        <InputGroup.Text >CDI %</InputGroup.Text>
                        <Form.Control  />
                        
                        <DropdownButton  title="Mês">
                            <Dropdown.Item  >ao ano</Dropdown.Item>
                            <Dropdown.Item>ao mes</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                
                </Col>

                </Row>
           
            
            <Button className="mt-2 mb-4 ">Simular</Button>
           </Form>
           <Row>
            <Col>
            <h1>Resultado</h1>
            <table className="mx-auto">
                <tr>
                    <tbody>
                        <td>Total Investido: </td>
                        <td>R$ 00,00</td>
                    </tbody>
                </tr>

                <tr>
                    <tbody>
                        <td>Total em Juros:</td>
                        <td>R$ 00,00</td>
                    </tbody>
                </tr>

                <tr>
                    <tbody>
                        <td>Total</td>
                        <td>R$ 00,00</td>
                    </tbody>
                </tr>
            </table>
            </Col>
           </Row>

           <Row className="d-flex col-sm-4 mx-auto mb-4">

            
           <h1>Se Resgatar</h1>

                    
            <table className=" mx-auto"    size="sm" >
            <thead className="tabela ">
            <tr  className=" ">
                <th className=" borda  p-1 border-bottom-0" colSpan={2}>Tempo</th>
                <th className=" borda border-bottom-0 p-1" colSpan={1}>Taxa</th>
                
                
            </tr>
            </thead>

            <tbody>
            <tr>
                <td  className="borda border-top-0 " colSpan={2}>0 até 6 mês</td>
                <td className="borda border-top-0 " colSpan={1}>22,5%</td>
                
                
            </tr>

            


            

            </tbody>
            
            <thead className="tabela ">
            <tr >
                <th className="borda border-bottom-0 p-1" colSpan={2}>Juros Liquido</th>
                <th className="borda border-bottom-0" colSpan={1}>Total Investido</th>
                
                
                
            </tr>
            </thead>

            <tbody>
            <tr>
                <td  className="borda border-top-0 " colSpan={2}>0 até 6 mês</td>
                <td className="borda border-top-0 " colSpan={1}>22,5%</td>
                
                
            </tr>

            <tr >
                <td className="borda border-bottom-0 p-1" colSpan={3}>Total Investido + Juros</td>
            </tr>
            <tr >
                <td className="borda border-top-0 p-1 display-5" colSpan={3}>R$ 4.500,00</td>
            </tr>
            </tbody>

            </table>

            </Row>











            <Row className="d-flex col-sm-4 mx-auto">

            
                   
                    <h1>Juros</h1>
                    
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

       </Row>
</Container>
        </Pagina>
    )
}