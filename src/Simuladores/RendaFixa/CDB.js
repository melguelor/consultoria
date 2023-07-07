import { Button, Col, Container, DropdownButton, Form, InputGroup, Row, Table, Dropdown } from "react-bootstrap"
import Pagina from "../../Modelo/Pagina"
import '../simulador.css'
import { useState } from "react";

export default function CDB(props)
{
//simulador CDB
    const [conteudoVisivel, setConteudoVisivel] = useState(false);
    const [valor, setValor] = useState(100);
    const [periodo, setPeriodo] = useState(1);
    const [periodo_tipo, setPeriodo_tipo] = useState("ao mês");
    const [taxaSelic, setTaxaSelic] = useState('13.65');
    const [cdi, setCdi] = useState(100);

    //Resultado
        const [totalInvestido,setTotalInvestido] = useState(Number)
        const [totalJuros,setTotalJuros] = useState(Number)

/// o valor da taxa selic depois mudar para o fetch!!!!
function calculos()
{
    let montante = 0,
          capital =valor,
          tempo = periodo,
          taxa = (periodo_tipo === "ao ano"? taxaSelic: taxaSelic/12)/100  
       
        const tempo_convertido = periodo_tipo === " ao ano"? 12 * tempo : tempo
             capital = capital * tempo_convertido
          if(periodo_tipo == "ao ano")
               setTotalInvestido((capital).toFixed(2))
        else if(periodo_tipo == "ao mês")
                    setTotalInvestido( capital)
               montante  = capital *  Math.pow((1 + taxa), tempo_convertido) 
           
            setTotalJuros((montante - capital).toFixed(2))
          console.log(tempo_convertido)
}
 

    function mudaPeriodoTipo(value)
    {
       
        setPeriodo_tipo(value)
       
    }

    
    
    const [valorAtualSelic,setvalorAtualSelic] = useState('')

//1178
function getValorCDI()
{fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4389/dados?formato=json')
        .then(response => response.json())
         .then(data => {
               
            const ultimoValorAnual = data[data.length - 1].valor;
            setvalorAtualSelic(ultimoValorAnual)
           
        })
        .catch(error => {
            console.error('Erro ao obter a taxa Selic anual:', error);
        })
}

//{selection === 'mes' ? 'Mês' : 'Ano'}
    return(
        <Pagina>
      
            <Container className="col-12  mt-1">
               
                <h1>Simulador CDB</h1>
               <Form className=" mx-auto "> 
               <Row className="col-lg-8 mx-auto">
                <Col sm={6} className="mt-3">
                    <InputGroup >
                        <InputGroup.Text >Valor Mensal R$</InputGroup.Text>
                        <Form.Control  value={valor} onChange={(e) => setValor(e.target.value)} className="text-center"/>
                    </InputGroup>
                
                </Col>
                <Col  sm={6} className="mt-3">
                                    <InputGroup>
                                        <InputGroup.Text >Periodo</InputGroup.Text>
                                        <Form.Control  value={periodo} onChange={(e) => setPeriodo(e.target.value)}   className="text-center"/>
                                        
                                        <DropdownButton  title={periodo_tipo === "ao ano"? "ao ano":"ao mês"} className="botao btn-roxo" value={periodo_tipo} onSelect={mudaPeriodoTipo}>
                                            <Dropdown.Item eventKey="ao ano">ao ano</Dropdown.Item>
                                            <Dropdown.Item eventKey="ao mês">ao mês</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                
                                </Col>
                </Row>

             

                <Row className="col-lg-8 mx-auto mt-3">
                <Col sm={6} className="mt-3">
                    <InputGroup >
                        <InputGroup.Text >Taxa Selic</InputGroup.Text>
                        <Form.Control value={taxaSelic}  className="text-center"/>
                        <InputGroup.Text >Anual</InputGroup.Text>
                    </InputGroup>
                
                </Col>
 <Col sm={6} className="mt-3">
                    <InputGroup >
                        <InputGroup.Text >CDI </InputGroup.Text>
                        <Form.Control  value={cdi} onChange={(e)=> setCdi(e.target.value)}  className="text-center"/>
                        <InputGroup.Text >%</InputGroup.Text>
                        
                    </InputGroup>
                
                </Col>
                </Row>


                <Row className="col-lg-5 mx-auto mt-3">
               

                </Row>
           
            
            <Button className="mt-2 mb-4 " onClick={calculos}>Simular</Button>
           </Form>
           <Row>
            <Col>
            <h1>Resultado</h1>
            <table className="mx-auto">
                <tr>
                    <tbody>
                        <td>Total Investido: </td>
                        <td>R${totalInvestido}</td>
                    </tbody>
                </tr>

                <tr>
                    <tbody>
                        <td>Total em Juros:</td>
                        <td>R$ {totalJuros}</td>
                    </tbody>
                </tr>

                <tr>
                    <tbody>
                        <td>Total</td>
                        <td>R${ totalInvestido * totalJuros}</td>
                    </tbody>
                </tr>
            </table>
            </Col>
           </Row>


           




           <Row className="d-flex col-lg-4 mx-auto mb-4 resgatar" >

            
           <h1>Se Resgatar</h1>

                    
            <table className=" mx-auto"    size="lg" >
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
                <td  className="borda border-top-0 " colSpan={2}>R$</td>
                <td className="borda border-top-0 " colSpan={1}>R$</td>
                
                
            </tr>

            <tr >
                <td className="borda border-bottom-0 p-1" colSpan={3}>Total Investido + Juros</td>
            </tr>
            <tr >
                <td className="borda border-top-0 p-1 display-5" colSpan={3}>R$ </td>
            </tr>
            </tbody>

            </table>

            <table className=" mx-auto mt-4"    size="lg" >
            <thead className="tabela ">
            <tr  className=" ">
                <th className=" borda  p-1 border-bottom-0" colSpan={2}>Tempo</th>
                <th className=" borda border-bottom-0 p-1" colSpan={1}>Taxa</th>
                
                
            </tr>
            </thead>

            <tbody>
            <tr>
                <td  className="borda border-top-0 " colSpan={2}>6 meses até 1 ano</td>
                <td className="borda border-top-0 " colSpan={1}>20%</td>
                
                
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
                <td  className="borda border-top-0 " colSpan={2}>R${}</td>
                <td className="borda border-top-0 " colSpan={1}>R${}</td>
                
                
            </tr>

            <tr >
                <td className="borda border-bottom-0 p-1" colSpan={3}>Total Investido + Juros</td>
            </tr>
            <tr >
                <td className="borda border-top-0 p-1 display-5" colSpan={3}>R$ 4.500,00</td>
            </tr>
            </tbody>

            </table>

            <table className=" mx-auto mt-4"    size="lg" >
            <thead className="tabela ">
            <tr  className=" ">
                <th className=" borda  p-1 border-bottom-0" colSpan={2}>Tempo</th>
                <th className=" borda border-bottom-0 p-1" colSpan={1}>Taxa</th>
                
                
            </tr>
            </thead>

            <tbody>
            <tr>
                <td  className="borda border-top-0 " colSpan={2}>1 ano até 2 anos</td>
                <td className="borda border-top-0 " colSpan={1}>22,5%</td>
                
                
            </tr>

            


            

            </tbody>
            
            <thead className="tabela mt-4">
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

            <table className=" mx-auto mt-4"    size="lg" >
            <thead className="tabela ">
            <tr  className=" ">
                <th className=" borda  p-1 border-bottom-0" colSpan={2}>Tempo</th>
                <th className=" borda border-bottom-0 p-1" colSpan={1}>Taxa</th>
                
                
            </tr>
            </thead>

            <tbody>
            <tr>
                <td  className="borda border-top-0 " colSpan={2}>acima de 2 anos</td>
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


            






            <Row className="d-flex col-lg-4 mx-auto">

            
                   
                    <h1>Juros</h1>
                    
                <table className=" mx-auto"    size="lg" >
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