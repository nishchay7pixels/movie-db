import React from 'react';
//config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
//hook
import { useHomeFetch } from "../hooks/useHomeFetch";
//read about hooks in reactjs docs

//images
import NoImage from '../images/no_image.jpeg';
import SearchBar from './SearchBar';

const Home = (/*For Props*/) =>{
    const {state, laoding, error, setSearchTerm} = useHomeFetch();
    console.log(state);
    return(
        <>
            {state.results[0] ? (
                <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].title}
                text={state.results[0].overview}/> ): 
                null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header='Popular Movies'>
            {state.results.map(movie => (
                <Thumb
                key={movie.id}
                clickable
                image={
                    movie.poster_path?
                    IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path: NoImage

                }
                movieId={movie.id}/
                >
                
            ))}
            </Grid>
            <Spinner/>
        </>
    );
}

export default Home;