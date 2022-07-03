// Dynamically create shopping list from local storage
window.addEventListener('load', () => {

    groceries = JSON.parse(localStorage.getItem('groceries')) || [];

    document.querySelector('form').addEventListener('submit', (e) => {

        e.preventDefault();
        alert('its working!');
        addGrocery(e.target.elements.new_grocery.value, groceries);
        e.target.reset();
        displayGroceryList(groceries);

    });

    displayGroceryList(groceries);

});

function displayGroceryList(groceriesArray) {
    
    const groceryListContainer = document.querySelector('#grocery_list_section');
    groceryListContainer.innerHTML = "";

    if (groceriesArray != []) {

        groceryListContainer.innerHTML += `<ul class="wrapper flex_container" id="grocery_list"></ul>`;
        groceriesArray.forEach(grocery => {  
            document.querySelector('#grocery_list').innerHTML += `<li class="grocery">${grocery.nameOfGrocery}</li>`;
        });

    }
}

function addGrocery(grocery, list) {

    const newGrocery = {
        'nameOfGrocery': grocery,
        'bought': false
    }
    list.push(newGrocery);
    localStorage.setItem('groceries', JSON.stringify(list));

}

// Validate input
// Sanitise input
