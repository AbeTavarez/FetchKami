//* Fetch Text Data From Text File
const fetchText = () => {
    fetch('text.txt')
        .then(res => {
            return res.text();
        })
        .then(data => {
            console.log(data);
            document.getElementById('root').innerText = data
        })
        .catch(err => {
            console.log(err);
        })
};

//* Fetch JSON Data From JSON File
const fetchJSON = () => {
    fetch('post.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            let output = '';

            data.forEach(post => {
                output += `<li>${post.title}</li>`
            });
            document.getElementById('root').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })
};

//* Fetch API Data From External API
const fetchAPI = () => {
    fetch('https://api.github.com/users')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            let output = '';

            data.forEach(user => {
                output += `<li>${user.login}</li>`
            });
            document.getElementById('root').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })
};









//* ========================== Event Listeners
const textBtn = document.getElementById('btn1');
textBtn.addEventListener('click', fetchText);

const jsonBtn = document.getElementById('btn2');
jsonBtn.addEventListener('click', fetchJSON);

const apiBtn = document.getElementById('btn3');
apiBtn.addEventListener('click', fetchAPI);