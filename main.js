// Dynamically create shopping list from local storage
window.addEventListener('load', () => {
    groceryList = JSON.parse(localStorage.getItem('groceryList')) || [];
})


const addGrocery = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('add button clicked!');
})




// Validate input


// Sanitise input