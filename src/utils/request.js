import axios from 'axios';

export default function request(httpOptions) {
    httpOptions.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    return axios(httpOptions)
        .then(response => response)
        .catch(error => {
            return error.response;
        });
}

