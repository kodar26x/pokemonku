import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import pokeColor from './pokeColor.js';
import './stlye.css'

const useStyles = makeStyles(theme => ({
    /*style grid*/
    grid: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));

function PokemonList({ pokemon }) {
    const classes = useStyles();

    return (
        <>
            {/* <div className='card' style={{zIndex :"-9999px"}}> */}


                <div className='gridContainer'>
                    <div className={classes.grid}>
                        <div className='pokeType' style={{ backgroundColor: pokeColor[pokemon.name] }}>
                 
                            <img className='pokeImage' src={pokemon.sprites.other["official-artwork"].front_default} alt='pokemon' />

                            <Grid container>
                                <Grid item xs={6}>
                                    <div className='pokeName'>
                                        {pokemon.name}
                                    </div>

                                </Grid>
                                <Grid item xs={6}>
                                    <div className='pokeOwned'>
                                        <div> <span>{pokemon.order}</span></div>
                                    </div>
                                </Grid>
                            </Grid>

                                <input type="button" value="Detail" style={{borderRadius:'20px'}} />
                            <div className='pokeTypes'>
                                {
                                    pokemon.types.map((type, i) => {
                                        return (
                                            <div className='pokeSkill' key={i}>
                                                {type.type.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default PokemonList;