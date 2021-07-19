const counter = {
    value: 0,
    increment() {
        console.log('increment->this', this);
        this.value += 1;

    }, decrement() {
        console.log('decrement->this', this);
        this.value -= 1;
    },

};
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const counterValue = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValue);


decrementBtn.addEventListener('click', function () {
    console.log('Кликнули на дикремент');
    counter.decrement();
    console.log(counter);
    counterValue.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    console.log('Кликнули на инкремент');
    counter.increment();
    console.log(counter);
    counterValue.textContent = counter.value;
});
