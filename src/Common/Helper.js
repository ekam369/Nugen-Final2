import { BASE_URL } from './Config';

const make_url = (url) => 
{
    return(BASE_URL + url); 
}

const Helper = (url, method, body) => {
    if( method === 'POST' ) {
        return(
            fetch(make_url(url), {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then((res) => {
                return res.json();
            })
        )
    }
    else if(method === 'GET') {
        return(
            fetch(make_url(url))
            .then((res) => {
                return res.json();
            })
        )
    } 
}

export default Helper;
