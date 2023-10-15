import { Button, Col, Container, DropdownButton, Form, InputGroup, Row, Table, Dropdown } from "react-bootstrap"
import Pagina from "../../Modelo/Pagina"
import '../simulador.css'
import { useEffect, useState } from "react";

export default function CDB(props)
{

  const [valorMensal,setValorMensal] = useState(100),
              [periodo,setPeriodo] = useState(1),
              [periodoTipo,setPeriodoTipo] = useState('ao ano'),
              [taxa,setTaxa] = useState(12.75),
              [CDI,setCDI] = useState(100),
              [total,setTotal] = useState(0.00),
              [juros,setJuros] = useState(0.00),
              [dados,setDados] = useState([])


//1178

function getValorCDI()
{fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4389/dados?formato=json')
        .then(response => response.json())
         .then(data => {
               
            const ultimoValorAnual = data[data.length - 1].valor;
            setTaxa(ultimoValorAnual)
           
        })
        .catch(error => {
            console.error('Erro ao obter a taxa Selic anual:', error);
        })
}







function calculos()//esta corretor para juros compostos
{     //Transformando o periodo em meses
        const auxPeriodo = periodoTipo === 'ao ano'? periodo * 12 : periodo
        

        //Adicionando o CDI a taxa
        const auxTaxa = (taxa * (CDI/100))
        //console.log(typeof auxTaxa)
        var aux = 1 + auxTaxa
        aux = Math.pow(aux,periodo)
        const montante =  parseFloat(valorMensal)  * aux

        

      // console.log(auxTaxa)
       // console.log( montante)

   
   
} 


function calculosmes()//esta corretissimo
{     //Transformando o periodo em meses
        const auxPeriodo = periodoTipo === 'ao ano'? periodo * 12 : periodo
        

        //Adicionando o CDI a taxa
        const auxTaxa =((taxa/12)/100)*(CDI/100)
        //console.log(typeof auxTaxa)
        //var aux = 1 + auxTaxa
       // aux = Math.pow(aux,auxPeriodo)
        //const montante =  parseFloat(valorMensal)  * aux
        var montante = 0
        var auxValorMensal = valorMensal

 var teste = 0
      var novosDados = []
        for(var i =1;i<= auxPeriodo; i++)
           {
            montante += parseFloat(auxValorMensal) * Math.pow(1 + auxTaxa, i);
              novosDados.push((montante - (i * auxValorMensal)).toFixed(2))

          //  setDados([...dados, montante - (i * auxValorMensal)])
          // dados.push(  )
           
           }
setDados([novosDados])
console.log(dados)


       //console.log(periodoTipo)
       // console.log( montante)
setTotal((valorMensal * auxPeriodo).toFixed(2))
    setJuros((montante - total).toFixed(2))
     
   
}


/*
function calculosmes()//esta corretor para juros compostos
{     //Transformando o periodo em meses
        const auxPeriodo = periodoTipo === 'ao ano'? periodo * 12 : periodo
        

        //Adicionando o CDI a taxa
        const auxTaxa =((taxa/12)/100)*(CDI/100)
        //console.log(typeof auxTaxa)
        var aux = 1 + auxTaxa
        aux = Math.pow(aux,auxPeriodo)
        const montante =  parseFloat(valorMensal)  * aux

      //  for(var i =1;i<= auxPeriodo; i++)
           //transformar em loop de meses



       //console.log(periodoTipo)
       // console.log( montante)

    setJuros((montante - valorMensal).toFixed())
     setTotal(valorMensal)
   
}
*/







useEffect(
    ()=>{
      
    }
)




    return(
        <Pagina>
          <Container>
                  <Form className="mx-auto">
                    <Row  className="col-lg-8 mx-auto">
                            <Col sm={6}>
                              <InputGroup className="m-3">
                                <InputGroup.Text>Valor Mensal</InputGroup.Text>
                                <Form.Control className="text-center" value={valorMensal} onChange={(e) => setValorMensal(e.target.value)} />
                            </InputGroup>
                            </Col>

                            <Col sm={6}>
                              <InputGroup className="m-3">
                                <InputGroup.Text>Periodo</InputGroup.Text>
                                <Form.Control className="text-center"  onChange={(e)=> setPeriodo(e.target.value)}/>
                               <DropdownButton title={periodoTipo} onSelect={e =>{setPeriodoTipo(e)}}>
                               <Dropdown.Item eventKey="ao ano">ao ano</Dropdown.Item>
                              <Dropdown.Item eventKey="ao mês">ao mês</Dropdown.Item>
                               </DropdownButton>
                            </InputGroup>


                            </Col>
                           
                          
                    </Row>

                    <Row className="col-lg-8 mx-auto">
                        <Col sm={6}>
                        <InputGroup className="m-3">
                          <InputGroup.Text>Taxa </InputGroup.Text>
                          <Form.Control className="text-center" value={taxa} onChange={e => setTaxa(e.target.value )}/>
                          <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                        </Col>

                        <Col sm={6}>
                        <InputGroup className="m-3">
                          <InputGroup.Text>CDI</InputGroup.Text>
                          <Form.Control value={CDI}  className="text-center"onChange={e =>setCDI(e.target.value)}/>
                          <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                        </Col>



                    </Row>
                    <Row className="col-2 mx-auto">
                    <Button  onClick={ ()=>{calculosmes()}}>Simular</Button>
                    </Row>
                 
                  
                  </Form>

                  <Row className="mx-auto col-4">
                  <Table >
                 
                 <tbody>
                   <tr>
                       <td>Total Investido</td>
                       <td>R${total}</td>
                   </tr>

                   <tr>
                       <td>Total em Juros</td>
                       <td>R$ {juros}</td>
                   </tr>

                   <tr>
                       <td>Total</td>
                       <td>R$ {parseFloat(juros)+parseFloat(total)}</td>
                   </tr>
                 </tbody>
                 </Table>
                  </Row>

                  <Row className="d-flex col-lg-4 mx-auto mb-4 resgatar">
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
                <td  className="borda border-top-0 " colSpan={2}>R${juros * 0.775}</td>
                <td className="borda border-top-0 " colSpan={1}>R$ {total}</td>
                
                
            </tr>

            <tr >
                <td className="borda border-bottom-0 p-1" colSpan={3}>Total Investido + Juros</td>
            </tr>
            <tr >
                <td className="borda border-top-0 p-1 display-5" colSpan={3}>R$  {(((juros * 0.775) + parseFloat(total)).toFixed(2))}</td>
            </tr>
            </tbody>

                    </table>
                  </Row>

                  <Row className="d-flex col-lg-4 mx-auto mb-4 resgatar">
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
                <td  className="borda border-top-0 " colSpan={2}>6 mes até 1 ano</td>
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
                <td  className="borda border-top-0 " colSpan={2}>R${juros * 0.8}</td>
                <td className="borda border-top-0 " colSpan={1}>R$ {total}</td>
                
                
            </tr>

            <tr >
                <td className="borda border-bottom-0 p-1" colSpan={3}>Total Investido + Juros</td>
            </tr>
            <tr >
                <td className="borda border-top-0 p-1 display-5" colSpan={3}>R$  {(((juros * 0.8) + parseFloat(total)).toFixed(2))}</td>
            </tr>
            </tbody>

                    </table>
                  </Row>

                  <Row className="d-flex col-lg-4 mx-auto mb-4 resgatar">
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
                <td  className="borda border-top-0 " colSpan={2}>1 ano até 2 anos</td>
                <td className="borda border-top-0 " colSpan={1}>17,5%</td>
                
                
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
                <td  className="borda border-top-0 " colSpan={2}>R${juros * 0.825}</td>
                <td className="borda border-top-0 " colSpan={1}>R$ {total}</td>
                
                
            </tr>

            <tr >
                <td className="borda border-bottom-0 p-1" colSpan={3}>Total Investido + Juros</td>
            </tr>
            <tr >
                <td className="borda border-top-0 p-1 display-5" colSpan={3}>R$  {(((juros * 0.825) + parseFloat(total)).toFixed(2))}</td>
            </tr>
            </tbody>

                    </table>
                  </Row>

                  <Row className="d-flex col-lg-4 mx-auto mb-4 resgatar">
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
                <td  className="borda border-top-0 " colSpan={2}>2 anos ou mais</td>
                <td className="borda border-top-0 " colSpan={1}>15%</td>
                
                
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
                <td  className="borda border-top-0 " colSpan={2}>R${juros * 0.85}</td>
                <td className="borda border-top-0 " colSpan={1}>R$ {total}</td>
                
                
            </tr>

            <tr >
                <td className="borda border-bottom-0 p-1" colSpan={3}>Total Investido + Juros</td>
            </tr>
            <tr >
                <td className="borda border-top-0 p-1 display-5" colSpan={3}>R$  {(((juros * 0.85) + parseFloat(total)).toFixed(2))}</td>
            </tr>
            </tbody>

                    </table>
                  </Row>
                  <Row className="  mx-auto col-4 "><table >
                  <thead className="tabela ">
            <tr >
                <th className="borda border-bottom-0 p-1" colSpan={2}>Juros Mensal</th>
              
                
                
                
            </tr>
            </thead>
                    {
                     
                    dados[0].map((item,index)=>(
                      
                        


                      <tr >
                        <td className="borda">{index+1}</td>
                        <td className="borda ">R$ {item}</td>
                        
                    </tr>
                    
                  ))
                    
                    }
                    </table>
                  </Row>


      </Container>
        </Pagina>
    )
}