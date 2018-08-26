import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/api"

axios.defaults.headers = {
    "Authorization": localStorage.getItem("token")
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
