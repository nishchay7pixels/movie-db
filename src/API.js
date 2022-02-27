import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "./config"


export default {
    fetchMovies: async (searchTerm, page) => {
        const endpoint = searchTerm != "" ?
            `${SEARCH_BASE_URL}${searchTerm}&page=${page}` :
            `${POPULAR_BASE_URL}&page=${page}`;
        console.log(endpoint);
        return (await fetch(endpoint)).json();
    }

   
}