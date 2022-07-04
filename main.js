// Dynamically create shopping list from local storage
window.addEventListener('load', () => {

    initialArray = [{
        'nameOfGrocery': 'peanuts',
        'bought': false
    }, {
        'nameOfGrocery': 'bananas',
        'bought': false
    }, {
        'nameOfGrocery': 'tea',
        'bought': false
    }, {
        'nameOfGrocery': 'strawberries',
        'bought': false
    }];

    groceries = JSON.parse(localStorage.getItem('groceries')) || initialArray;

    document.querySelector('form').addEventListener('submit', (e) => {

        e.preventDefault();
        let input = e.target.elements.new_grocery.value;
        alert('Grocery added!');
        addGrocery(input, groceries);
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

// Messages

// Validate input
// Sanitise input
