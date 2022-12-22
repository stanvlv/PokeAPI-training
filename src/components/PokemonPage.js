import axios from 'axios'
import {useState, useEffect} from 'react'
import NotFound from './NotFound'
import {useParams, useNavigate} from 'react-router-dom'
 
export default function PokemonPage ({pokeName}) {
    
    const {name} = useParams();
    const navigate = useNavigate()

    const [pokeData, setPokeData] = useState()
    

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => setPokeData(response.data))        
        .catch((error) => { alert(error)})
    }, [])
    

    return <>
    <h2>Poke: {name}</h2>
    <p>Height: {pokeData?.height}</p>
    <p>Weight: {pokeData?.weight}</p>
    <img src={pokeData?.sprites.front_default} />
    <button onClick={() => navigate(-1)}>Go Back to all Pokemons</button>
    
    </>
}