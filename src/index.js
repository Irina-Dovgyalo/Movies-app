import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class SwaggerUIService {

    _apiBase = 'https://reactjs-cdp.herokuapp.com/';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }        
        return await res.json();
    }   
    async getAllMovies() {
        const res = await this.getResource(`movies`);
        return res.data;
    } 

    getMovieId(id) {
        return this.getResource(`movies/ ${id}`);
    } 
}

const data = new SwaggerUIService();

data.getAllMovies().then((movies) => {
    movies.forEach((movie) => {
        console.log(movie.title);
    });
});

data.getMovieId(11).then((movie) => {
    console.log(movie.id);
});

// const getMovies = async (url) => {
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}`)
//     }
    
//     const body = await res.json();
//     return body;
// }

// getMovies('https://reactjs-cdp.herokuapp.com/movies')
//     .then((body) => {
//         console.log(body);
//     })
//     .catch((err) => {
//         console.error('Could not fetch', err);
//     })


ReactDOM.render(<App />, document.getElementById('root'));

