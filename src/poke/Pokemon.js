import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getPokemon, getAllPokemon } from './servis.js';
import PokemonList from './pokemonList.js';
import '../App.css';
import Navbar from './sidebar.jsx';
import Fluter from './foolter.jsx';



function Percobaan() {
    const [pokemonData, setPokemonData] = useState([])
    const [loading, isLoading] = useState(true)
    const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=200'

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(apiURL)
            await loadPokemon(response.results)
            isLoading(false)
        }
        fetchData()
    }, [])

    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonGet = await getPokemon(pokemon)
            return pokemonGet
        }))
        setPokemonData(_pokemonData)
    }

    console.log(pokemonData)


    return (
        <>
            <Navbar />
          
            <div className='gridContainer'>
                {loading ? <h1>Loading...</h1> : (
                    pokemonData.map((pokemon, i) => {
                        return <PokemonList key={i} pokemon={pokemon} />
                    })
                )}
            </div>
            
            <Fluter />
        </>
    );
}

export default Percobaan;