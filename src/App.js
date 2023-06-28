import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/home'
import TelaEscolhaSimulador from './Simuladores/TelaEscolhaSimulador';

function App() {





  return (
    <div className="App fundo text-center">
      
      <BrowserRouter>

<Routes>
  <Route path="/" element={<Home tituloPagina="Home"/>}/>
  <Route path="/simulador" element={<TelaEscolhaSimulador />}/>
  <Route path="/simulador_CDB" element={<TelaEscolhaSimulador />}/>
 
  

  </Routes>


<Routes>



</Routes>

</BrowserRouter>


      
      
    </div>
  );
}

export default App;
