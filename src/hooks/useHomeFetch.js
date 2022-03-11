import React, { useEffect } from "react";
import { useState } from 'react';
import API from "../API";

const inititalState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_resulta: 0
}
export const useHomeFetch = () =>{
    const {searchTerm, setSearchTerm} = useState('');
    const [state, setState] = useState(inititalState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log(searchTerm);
    const fetchMovies = async (page, searchTerm="") => {
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
    return {state, loading, error, setSearchTerm};
    
}