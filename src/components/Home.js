import React, { useEffect } from "react";
import { useState } from 'react';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//components

//API
import API from "../API";
//hook
//read about hooks in reactjs docs

//images
import NoImage from '../images/no_image.jpeg';

const Home = (/*For Props*/) =>{
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm="Some") => {
        try{
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);
            setState(prev => ({
                ...movies, 
                results:
                    page > 1 ? [...prev.results, ...movies.results] :
                    [...movies.results]
            }));
        }catch(error) {
            setError(true);
        }
        setLoading(false);
    };
    // Initial render fetch all movies page 1
    useEffect(() => {
        fetchMovies(1)
    }, []);
    console.log(state);
    return(
        <div className="Home">
            HomePage
        </div>
    );
}

export default Home;