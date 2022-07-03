// Dynamically create shopping list from local storage
window.addEventListener('load', () => {
    let groceries = JSON.parse(localStorage.getItem('groceries')) || [];

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('add button clicked!');
        addGrocery(e.target.elements.newGrocery.value, groceries);
    });

    function addGrocery(newGrocery, groceryList) {
        const grocery = {
            nameOfGrocery: newGrocery,
            bought: false
        }
        groceryList.push(grocery);
        localStorage.setItem('groceries', JSON.stringify(groceryList));
    }

});

// Validate input


// Sanitise input