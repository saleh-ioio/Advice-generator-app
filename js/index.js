const adviceNum = document.querySelector('#adviceId');
const advice    = document.querySelector('#advice');

fetch('https://api.adviceslip.com/advice').then((response) => {
console.log('resolved' , response);
return response.json();
}).then(data => {
    console.log(data);
    console.log(data.id, data.advice, data);
    adviceNum.textContent =  data.slip.id;
    advice.textContent = '"' + data.slip.advice + '"';
}).catch((err) => {
    console.log('rejected',err);
});

