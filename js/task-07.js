const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
text.style.color = 'blue';
console.log(input)
console.log(text)
input.addEventListener('input',
    function () {
        text.style.fontSize = input.value + 'px'
    }
);