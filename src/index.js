import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


fetch('https://reactjs-cdp.herokuapp.com/movies')
.then((response) => {
    console.log('Got response', response.statusText);
})

ReactDOM.render(<App />, document.getElementById('root'));

