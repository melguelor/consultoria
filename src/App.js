import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/home'
import TelaEscolhaSimulador from './Simuladores/TelaEscolhaSimulador';
import PaginaFutura from './Modelo/paginaFutura';
import CDB from './Simuladores/RendaFixa/CDB';

function App() {





  return (
    <div className="App fundo text-center">
      
      <BrowserRouter>

<Routes>
  <Route exact path="/" element={<Home />}/>
  
  <Route path="/simulador" element={<TelaEscolhaSimulador />}/>
  <Route path="/simulador_CDB" element={<TelaEscolhaSimulador />}/>
  <Route path="/404" element={<PaginaFutura />}/>
  <Route path="/CDB" element={<CDB />}/>
 
  

  </Routes>




</BrowserRouter>


      
      
    </div>
  );
}

export default App;
