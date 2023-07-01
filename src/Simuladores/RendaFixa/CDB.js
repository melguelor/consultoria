import { Button, Form, Table } from "react-bootstrap"
import Pagina from "../../Modelo/Pagina"
import '../simulador.css'

export default function CDB(props)
{




    return(
        <Pagina>

           <Form >
            <Form.Group className="col-3 mx-auto">
                <Form.Label>rrtrtrt</Form.Label>
                <Form.Control />
            </Form.Group>
            <Button>Simular</Button>
           </Form>
     
                    
                <Table className="mx-auto tabela "    size="sm" >
            <thead className="tabela ">
                <tr  className="borda">
                    <th className="borda" >Nome</th>
                    <th className="borda">Sobrenome</th>
                    <th className="borda">Idade</th>
                    <th className="borda">Idade</th>
                    <th className="borda">Idade</th>
                    <th className="borda">Idade</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td  className="borda">Douglas</td>
                    <td className="borda">Toledo</td>
                    <td className="borda">29</td>
                     <td className="borda">Douglas</td>
                    <td className="borda">Toledo</td>
                    <td className="borda">29</td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>35</td>
                </tr>
            </tbody>
        </Table>

       

        </Pagina>
    )
}