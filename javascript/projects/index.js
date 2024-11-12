/**
 * Practice Exercise:
    Create a button that, when clicked, increases a displayed number by 1.
    Modify it to decrease the number when a second button is clicked.

 */

let count = 0;

const updateCounter = () => {
    document.getElementById("counter").textContent = count;
};
    
const increment = () => {
    count++;
    updateCounter();
};
    
const decrement = () => {
    count--;
    updateCounter();
};
    