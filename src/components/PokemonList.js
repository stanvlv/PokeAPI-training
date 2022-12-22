import {useState, useEffect, } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import Search from './Search'

export default function PokemonList () {



    const [pokemon, setPokemon] = useState([])


    const [searchPoke, setSearchPoke] = useState('pokemon/')

    

    useEffect(() => {
      axios
      .get(`https://pokeapi.co/api/v2/${searchPoke}`)
      .then(response => setPokemon(response.data))
      .catch(error => console.log(error))
  }, [searchPoke])
  

      return (
        <div>
            <Search setSearchPoke={setSearchPoke} />
            {pokemon.results?.map((pokemon) => {
                return (
            <div className='pokemon' key={pokemon.name} >
                <h2>{pokemon.name}</h2>
                <p>{pokemon.url}</p>
                <button><Link to={`/pokemon/${pokemon.name}`}>View More</Link></button>
            </div>
               ) })}   
        </div>

    )
}