import {Routes,Route} from 'react-router-dom';
import Home from './home.jsx';
import Pokemon from './pokemon.jsx';
import './App.css';
function Application(){
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pokemon/:id' element={<Pokemon/>}/>
    </Routes>
  );
}
export default Application;