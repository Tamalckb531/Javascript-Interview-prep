//? Question: Create a button UI and add debounce as follows =>
// -> Show "Button Pressed X times" every time button is pressed
// -> Increase "Triggered Y Times" count after 800ms of debounce

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const debounceCount = _.debounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     debounceCount();
// })

//? Question: Create a button UI and add throttle as follows =>
// -> Show "Button Pressed X times" every time button is pressed
// -> Increase "Triggered Y Times" count after 800ms of throttle

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const throttledCount = _.throttle(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     throttledCount();
// })

//? Question: Create Debounce Polyfill implementation

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const myDebounce = (callback, delay) => {
//     let timer;

//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             callback(...args);
//         }, delay)
//     }
// }

// const debounceCount = myDebounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);


// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     debounceCount();
// })

//? Question: Create Throttle Polyfill implementation

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

const myThrottle = (callback, delay) => {
    let last = 0;

    return (...args) => {
        let now = new Date().getTime();
        if (now - last < delay) return;
        last = now;
        return callback(...args);
    }
}

const throttleCount = myThrottle(() => {
    count.innerHTML = ++triggerCount;
}, 1000);


btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    throttleCount();
})
