

import { Button, Container, Image, Row, Col, Card, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../fotos/logo_novo.png'
import calculo_financa from '../fotos/calculo_financa.png'
import retorno_melhor from '../fotos/retorno_melhores.png'
import amigavel from '../fotos/interface_amigavel.png'
import video from '../fotos/video.png'
import caderno from '../fotos/caderno.png'
import contato from '../fotos/contato.png'
import duracaoo from '../fotos/duracao.png'
import entende from '../fotos/entende.png'
import dinheiro from '../fotos/dinheiro.png'
import Quadro from '../Modelo/card.js'
import Sequencia from '../Modelo/sequencia';
import victor from '../fotos/VictorMachini.jpg'
import './css.css'
import Menu from '../Modelo/menu';
import Login from '../Modelo/login';
import Pagina from '../Modelo/Pagina';

function App() {





  return (
    <div className="App  text-center fundo_moeda">  <Pagina>
      
        
      
        
        <Container className='  secao_1' >
          
          <p >
            <img src={logo} width='50%'  className='imagem_desktop imagem_mobile'/>
          </p>

          <h1 className='titulo_laranja sombra'>Invista Para Nunca Mais Parar</h1>
          <Button className="mb-3 btn btn-success border" onClick={() =>window.open('https://api.whatsapp.com/send?phone=5518991844367&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20a%20CONSULTORIA')}>GARANTA SUA CONSCIENCIA FINANCEIRA</Button>
        </Container>

        <Container className=' mt-1 secao_1'>
          <h1 className='titulo_laranja'>Para quem é a Consultoria ?</h1>
          <p className='text-center'>
          Se você está cansado de se deparar com diversos materiais que geram confusão ou despertam medos em relação ao mercado financeiro. Então esta consultoria é para você.
          <br/>Venha conhecer a verdadeira essência do mercado financeiro através de uma consultoria que irá te apoiar enquanto você aprende, tudo isso no conforto do seu próprio ritmo.
            Com a construção de um conhecimento sólido e duradouro, você poderá navegar livremente entre os investimentos conservadores, moderados e arrojados.
            <br/> E tendo uma mente <br/> <div className='large '>INVESTIDORA E CONSCIENCIA</div>

          </p>
            <Container  >
             
            <Container>

       
<h1 className='titulo_laranja'> Como vai funcionar?</h1>
          <p className='col-lg-8 text-center d-flex content-justify mx-auto'>
          O funcionamento será acordado entre as partes, mas esses itens serão essencias para o bom funcionamento
          </p>

          <Row className='d-flex justify-content-center mx-auto'>

<Col className='mt-1 col-lg-3 d-flex' >
      <Quadro className=""
          imagem={calculo_financa}
          porcentagem={'50%'}
          titulo="Para Pessoas Cansadas de não entender o que se está dizendo."
                          texto="Existe uma quantidade absurda de informações e todas soltas. Isso tem custo de tempo e vida"
      />
</Col>

<Col className='mt-1 col-lg-3 d-flex' >
<Quadro
          imagem={retorno_melhor}
          porcentagem={'50%'}
          titulo="Para Pessoas Cansadas de não ter retornos que ganham da inflação."
                          texto="Ter retorno satisfatorio é o caminho para vencer nos investimentos. Ficar abaixo da inflação é perder dinheiro"
      />
</Col>



<Col className='mt-1 col-lg-3 bg-transparent d-flex' >
      <Quadro className="col"
          imagem={amigavel}
          porcentagem={'50%'}
          titulo="Contato Direto"
          texto={'A hora que você julgar necessário, poderá entrar em contato e será atendido da forma que mais desejar: Mensagem, audio, video chamada ou ligação.'}
        />
</Col>



</Row>






</Container>






















             

            
              
            </Container>


        </Container>

        <Container className='col-sm-10'>
          <Row>
            <Col  sm={4} className='p-1'>
            <img src={victor}  height="400px" className='mt-5 borda-tracos'/>
            </Col>


            <Col sm={8} >
              <h1 className='titulo_laranja'>VICTOR HUGO MACHINI</h1>
              <p className='text-justify'>            Como investidor, adquiri conhecimento ao me questionar sobre o rendimento da poupança.              Desde os meus 20 anos, tenho investido diligentemente.</p> 
              <p className='text-justify'>Comecei com a mesada que economizei durante a infância e, em seguida, passei a investir o dinheiro excedente proveniente de práticas inteligentes de economia, que se tornaram cada vez mais presentes em minha vida.</p>
              <p className='text-justify'> Paralelamente, a programação entrou em minha vida como outra profissão tão complexa quanto a educação financeira, proporcionando gratificação de diferentes maneiras.</p>
              <p className='text-justify'>Durante meus anos de investimento, aprendi o método do polvo, onde tive que separar a verdade da mentira, explorando hipóteses matemáticas absurdas que se provaram reais ou não. </p>
              <p className='text-justify'>Com isso, desenvolvi habilidade para investir e compartilhar esse conhecimento acumulado. Atualmente, dedico-me há 2 anos a ensinar investimentos de forma privada e exclusiva.Meu objetivo é que o cliente se sinta à vontade para conversar comigo como se fôssemos dois amigos discutindo um assunto no qual ambos têm grande domínio.</p>
              <p className='text-justify'>Ao final, desejo que você adquira o conhecimento que possuo, seja capaz de seguir sozinho e descobrir as artimanhas utilizadas pelos bancos.</p>
            </Col>

          </Row>
        </Container>




















        <Container >
          <h1 className='titulo_laranja'> O que Irá Aprender Comigo?</h1>
          <p className='col-lg-8 text-center d-flex content-justify mx-auto'>
          Descubra tudo o que você irá aprender. Uma Consultoria completa que vai te guiar em uma jornada de descobrimento, enriquecimento e transformação pessoal. Aqui estão três tópicos principais que serão abordados:
          </p>
          <Sequencia 
              numero='01'
              titulo="As diversas nomeclaturas"
              texto="Saberá entender cada sigla do mercado financeiro."
          
          />

          <Sequencia 
              numero='02'
              titulo="Comparar Investimentos"
              texto="Saberá escolher o que é melhor para você de acordo com seu objetivo e o mercado atual."
          
          />
       

        <Sequencia 
              numero='03'
              titulo="BOLSA DE VALORES"
              texto="Irá investir diretamente na Bolsa de Valores comprando e vendendo."
          
          />


           <Sequencia 
              numero='04'
              titulo="Controle Financeiro"
              texto="Aprenderá finalmente o que é economia financeira pessoal."
          
          />

           <Sequencia 
              numero='05'
              titulo="Independencia Financeira"
              texto="Conquistará a tão sonhada e deseja vida financeira que você possa desejar."
          
          />

          
        </Container>

        <Container>

       
                <h1 className='titulo_laranja'> Como vai funcionar?</h1>
                          <p className='col-lg-8 text-center d-flex content-justify mx-auto'>
                          O funcionamento será acordado entre as partes, mas esses itens serão essencias para o bom funcionamento
                          </p>
        
                          <Row className='d-flex justify-content-center mx-auto'>
                
                <Col className='mt-1 col-lg-3 d-flex' >
                      <Quadro className=""
                          imagem={video}
                          porcentagem={'20%'}
                          titulo="Videos Exclusivos"
                          texto="Videos exclusivos sobre os assuntos. Tambem videos sob demanda do cliente para tirar duvida ou apronfundar no assunto. Tudo numa playlist no youtube onde só vocÊ terá acesso."
                      />
                </Col>

                <Col className='mt-1 col-lg-3 d-flex' >
                <Quadro
                          imagem={caderno}
                          porcentagem={'20%'}
                          titulo="Caderno Digital"
                          texto="Disponivel um caderno digital contendo os asssuntos já tratos, a estrategia a se seguir e diversos materiais interessantes."
                      
                      />
                </Col>



                <Col className='mt-1 col-lg-3 bg-transparent d-flex' >
                      <Quadro className="col"
                          imagem={contato}
                          porcentagem={'20%'}
                          titulo="Contato Direto"
                          texto={'A hora que você julgar necessário, poderá entrar em contato e será atendido da forma que mais desejar: Mensagem, audio, video chamada ou ligação.'}
                        />
                </Col>
                
                

              </Row>




              <Row className='d-flex justify-content-center mx-auto'>
                
                <Col className='mt-1 col-lg-3 d-flex' >
                      <Quadro className=""
                          imagem={duracaoo}
                          porcentagem={'20%'}
                          titulo="Duração"
                          texto="Minino Recomendado é 4 meses podendo ser extendido de acordo com a necessidade."
                      />
                </Col>

                <Col className='mt-1 col-lg-3 d-flex' >
                <Quadro
                          imagem={entende}
                          porcentagem={'20%'}
                          titulo="Informações Claras"
                          texto="Você entenderá tudo."
                      
                      />
                </Col>



                <Col className='mt-1 col-lg-3 bg-transparent d-flex' >
                      <Quadro className="col"
                          imagem={dinheiro}
                          porcentagem={'20%'}
                          titulo="Sem Perda de Dinheiro"
                          texto={'Iremos a passos lentos e construtivos e isso fará com que não perda dinheiro e nem fique exposto ao risco.'}
                        />
                </Col>
                
                

              </Row>

              </Container><Card className='col-lg-4 mb-2'>
                
                <Card.Body className='card_corpo text-light'>
                <Card.Img variant="top" src={logo} className="mx-auto"/>
                <p className="text-light">Consultoria completa sobre Investimento e Educação financeira</p>
                
                
                </Card.Body>
                <Card.Footer>
                  <Link to="/">
                  <Button className=' btn btn-success border' onClick={() =>window.open('https://api.whatsapp.com/send?phone=5518991844367&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20a%20CONSULTORIA')}>GARANTA SUA CONSCIÊNCIA FINANÇEIRA</Button>
                  </Link>
                </Card.Footer>
              </Card>
            <Container className='row '>
              
            <h1 className='titulo_laranja display-3'>MODALIDADES</h1>

              <Card className='col-lg mt-md-0 mt-4'>
                <Card.Header className=" bg-success text-light">
                    Avulso
                </Card.Header>
                <ListGroup variant='flush'>
                  <ListGroup.Item>1 hora de conversação</ListGroup.Item>
                  <ListGroup.Item>Tira Duvidas</ListGroup.Item>
                  <ListGroup.Item>-</ListGroup.Item>
                  <ListGroup.Item>-</ListGroup.Item>
                  <ListGroup.Item>-</ListGroup.Item>
                </ListGroup>
                <Button variant='success' onClick={() =>window.open('https://api.whatsapp.com/send?phone=5518991844367&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20a%20CONSULTORIA')}>
                <Card.Footer className='' >
                  APARTIR DE <br />
                  
                  R$ 80,00
                </Card.Footer>
              </Button>
              </Card>

              <Card className='col-lg mt-md-0 mt-4'>
                <Card.Header className=" bg-success text-light">
                    Treinamento
                </Card.Header>
                <ListGroup variant='flush'>
                  <ListGroup.Item>4 meses</ListGroup.Item>
                  <ListGroup.Item>Produção de Materia</ListGroup.Item>
                  <ListGroup.Item>Do Básico ao Avançado</ListGroup.Item>
                  <ListGroup.Item>Estrategia Financeira</ListGroup.Item>
                  <ListGroup.Item>-</ListGroup.Item>
                  
                </ListGroup>
                <Button variant='success' onClick={() =>window.open('https://api.whatsapp.com/send?phone=5518991844367&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20a%20CONSULTORIA')}>
                <Card.Footer>
                  APARTIR DE <br/>
                  R$ 500,00
                </Card.Footer></Button>
              </Card>

              <Card className='col-lg mt-md-0 mt-4'>
                <Card.Header className=" bg-success text-light">
                    OMEI - Orientação Mensal Estratégica de Investimentos
                </Card.Header>
                <ListGroup variant='flush'>
                  <ListGroup.Item>Uma vez ao mês</ListGroup.Item>
                  <ListGroup.Item>Entrega de um guia Mensal </ListGroup.Item>
                  <ListGroup.Item>Consultor decide o melhor caminho para o objetivo</ListGroup.Item>
                </ListGroup>
                <Button variant='success' onClick={() =>window.open('https://api.whatsapp.com/send?phone=5518991844367&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20a%20CONSULTORIA')}>
                <Card.Footer>
                  APARTIR DE <br/>
                  R$ 150,00
                </Card.Footer></Button>
              </Card>

              <Card className='col-lg mt-md-0 mt-4'>
                <Card.Header className=" bg-success text-light">
                    CAI - Consultoria  Anual de  Ivestimentos
                </Card.Header>
                <ListGroup variant='flush'>
                  <ListGroup.Item>Uma vez ao ano</ListGroup.Item>
                  <ListGroup.Item>Verificação de Todos os Investimentos</ListGroup.Item>
                  <ListGroup.Item>Realocação de Recursos</ListGroup.Item>
                  <ListGroup.Item>Guia de Investimento</ListGroup.Item>
                </ListGroup>
                <Button variant='success' onClick={() =>window.open('https://api.whatsapp.com/send?phone=5518991844367&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20a%20CONSULTORIA')}>
                <Card.Footer>
                  APARTIR DE <br/>
                  R$ 300,00
                </Card.Footer></Button>
              </Card>
             <p>preços serão definidos posteriormente</p>
            </Container>

            <Container className="col-11">
             <h1 className='titulo_laranja'>Quer Saber Mais?</h1>
             <Row>
              1. Qual o tempo de duração?
              <p className="d-flex">Via de regra é 4 meses, podendo ser extendido a por tempo indeterminado. Com custos </p>
             </Row>

             <Row>
              2. Vou perder dinheiro na bolsa de valores?
              <p className="d-flex">Iremos devagar com estrategia. Meu método não tem perda de dinheiro. Você estará sendo consultado por um profissionaal que sabe o que está fazendo </p>
             </Row>

             <Row>
              3. Quanto tempo leva para a produção de material exclusivo?
              <p className="d-flex">De 3 a 7 dias para produzir, gravar, editar videos e outros materias exclusivos conforme a demanda do cliente </p>
             </Row>

             
             
</Container>







       
       </Pagina>
    </div>
  );
}

export default App;
