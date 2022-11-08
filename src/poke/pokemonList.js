import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import pokeColor from './pokecolor';
import './stlye.css'
import DetailModal from './modal.jsx';
import './color.css'


const useStyles = makeStyles(theme => ({
    /*style grid*/
    grid: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
})
);


function PokemonList({ pokemon }) {
    const [modalShow, setModalShow] = useState(false);

    const classes = useStyles();
    console.log(pokemon)
    return (
        <>



            <div className='gridContainer'>
                <div className={classes.grid}>
                    <div className={'pokeType ' + pokemon.types[0].type.name}>

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

                        <button type="button" style={{ borderRadius: '20px' }} onClick={() => setModalShow(true)} >Detail</button>
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
                    <DetailModal name={pokemon.name} number={pokemon.order}  type={pokemon.types[0].type.name} image={pokemon.sprites.other["official-artwork"].front_default} show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>

        </>
    )
}

export default PokemonList;