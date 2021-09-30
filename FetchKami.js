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
        fetch(url) //fetch returns a promise
        .then(res => res.json()) // mapped it to json
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
}