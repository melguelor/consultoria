
import './App.css';
import { Button, Container, Image, Row, Col, Card } from 'react-bootstrap';
import logo from './fotos/logo_mod.png'
import calculo_financa from './fotos/calculo_financa.png'
import retorno_melhor from './fotos/retorno_melhores.png'
import amigavel from './fotos/interface_amigavel.png'
import video from './fotos/video.png'
import caderno from './fotos/caderno.png'
import contato from './fotos/contato.png'
import duracaoo from './fotos/duracao.png'
import entende from './fotos/entende.png'
import dinheiro from './fotos/dinheiro.png'
import Quadro from './card.js'
import Sequencia from './sequencia';
import victor from './fotos/VictorMachini.jpg'
import './css.css'
import Menu from './menu';
import Login from './login';

function App() {





  return (
    <div className="App fundo">
      <Container className="borda-tracos">
        <Menu/>
        
        <Container className=' mt-1 secao_1' >
          <p>
            <img src={logo} width="35%" />
          </p>
          <p>
          <iframe width="90%" height="315" src="https://www.youtube.com/embed/KeXjAAOG5NY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </p>

          <p className='display-5'>Invista Para nunca Mais Parar</p>
          <Button className="mb-3 btn btn-success border">GARANTA SUA CONSCIENCIA FINANCEIRA</Button>
        </Container>

        <Container className=' mt-1 secao_1'>
          <p className='display-6'>Para quem é a mudeiiiiii ?</p>
          <p className='text-center'>
          Se você está cansado de se deparar com diversos materiais que geram confusão ou despertam medos em relação ao mercado financeiro. Então esta consultoria é para você.
          <br/>Venha conhecer a verdadeira essência do mercado financeiro através de uma consultoria que irá te apoiar enquanto você aprende, tudo isso no conforto do seu próprio ritmo.
            Com a construção de um conhecimento sólido e duradouro, você poderá navegar livremente entre os investimentos conservadores, moderados e arrojados.
            <br/> E tendo uma mente <br/> <div className='large '>INVESTIDORA E CONSCIENCIA</div>

          </p>
            <Container  >
             
              


            
              
            </Container>


        </Container>

        <Container className='col-sm-10'>
          <Row>
            <Col  sm={4} className='p-1'>
            <img src={victor}  height="400px" className='mt-5 borda-tracos'/>
            </Col>


            <Col sm={8} >
              <h1 >VICTOR HUGO MACHINI</h1>
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
          <h1> O que Irá Aprender Comigo?</h1>
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

        
            <Container className=' d-flex justify-content-center mx-auto'>
              <Card className='col-lg-4 '>
                <Card.Title className='promocao p-2'>
                  PROMOÇÃO DE LANÇAMENTO
                </Card.Title>
                <Card.Body className='card_corpo text-light'>
                <Card.Img variant="top" src={logo} className="mx-auto"/>
                <p className="text-light">Consultoria completa sobre Investimento e Educação financeira</p>
                <h1>R$450,00</h1>
                <p className="text-light">ou</p>
                <h1>12 x   46,54</h1>
                
                </Card.Body>
                <Card.Footer>
                  <Button className=' btn btn-success border'>GARANTA SUA CONSCIÊNCIA FINANÇEIRA</Button>
                </Card.Footer>
              </Card>
            </Container>

            <Container className="col-11">
             <h1>Quer Saber Mais?</h1>
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
              <p className="d-flex">de 3 a 7 dias para produzir, gravar, editar videos e outros materias exclusivos conforme a demanda do cliente </p>
             </Row>

             
             
</Container>







       </Container>
      
    </div>
  );
}

export default App;
