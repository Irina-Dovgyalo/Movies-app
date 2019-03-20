import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const getMovies = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}`)
    }
    
    const body = await res.json();
    return body;
}

getMovies('https://reactjs-cdp.herokuapp.com/movies')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('Could not fetch', err);
    })


ReactDOM.render(<App />, document.getElementById('root'));

