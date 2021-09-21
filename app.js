//* Fetch Text From File
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
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', fetchText);