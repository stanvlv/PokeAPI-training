import PokemonList from "./PokemonList"
import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Search ({setSearchPoke}) {

    const [pokeSearch, setPokeSearch] = useState('')

    

    return (
        <>
        <div>
            <form onSubmit={(e) => {e.preventDefault(); setSearchPoke(`pokemon/${pokeSearch}`)}}>
                <input placeholder='search your poke' onChange={(e) => {setPokeSearch(e.target.value)}}></input>
                <button><Link to={`/pokemon/${pokeSearch}`}>Submit</Link></button>
            </form>
        </div>
        </>
    )
}