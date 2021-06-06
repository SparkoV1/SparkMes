import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost} from './redux/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<React.Fragment>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </React.Fragment>
        , document.getElementById('root'));
};


