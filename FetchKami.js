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
        return new Promise((resolve, reject) => {
        fetch(url) //fetch returns a promise
        .then(res => res.json()) // mapped it to json
        .then(data => resolve(data)) // resolve: to send the response
        .catch(err => reject(err)) // reject: to send the error
        })
    }
}