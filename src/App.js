import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import PokemonList from './components/PokemonList'
import PokemonPage from './components/PokemonPage'
import NotFound from './components/NotFound'
import Home from './components/Home'

function App() {
  

  return (
    <div className="App">
      <ul>
        <li><Link to='/'>Go to Main page</Link></li>
        <li><Link to='/pokemon'>Show me the Pokemons</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon'>
        <Route index element={<PokemonList />} />
        <Route path=':name' element={<PokemonPage />} />
        </Route>
        <Route path='/pokemon/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
