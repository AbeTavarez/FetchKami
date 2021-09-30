
const http = new FetchKami;

// Get users
// http.get(`https://jsonplaceholder.typicode.com/users`)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// User Data
const data = {
    name: 'abe',
    username: 'abe-dev',
    email: 'abe-dev@gmail.com'
};

// Create Post
// http.post(`https://jsonplaceholder.typicode.com/users`, data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Update Post
http.put(`https://jsonplaceholder.typicode.com/users/3`, data)
.then(data => console.log(data))
.catch(err => console.log(err))