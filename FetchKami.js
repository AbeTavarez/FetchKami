/**
 * 
 * FetchKami Library
 * Library for making HTTP Requests
 * 
 * @version 1.0.0
 * @author Abraham tavarez
 * @license MIT
 * 
 * */

class FetchKami {
    //* === Make an HTTP GET
    get(url) {
        // returns a new Promise
        return new Promise((resolve, reject) => {
        fetch(url) //fetch returns a promise
        .then(res => res.json()) // mapped it to json
        .then(data => resolve(data)) // resolve: to send the response
        .catch(err => reject(err)) // reject: to send the error
        })
    }

    //* === Make an HTTP POST Request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}