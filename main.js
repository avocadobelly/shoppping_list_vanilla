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
    try {
        list.push(newGrocery);
        localStorage.setItem('groceries', JSON.stringify(list));
        message('#add_grocery_message_container', 'success', 'New grocery added!');
    } catch (error) {
        console.log(error);
        message('#add_grocery_message_container', 'failure', 'Something went wrong!');
    }
}

function message(container, type, text) {
    // find element on page
    const messageContainer = document.querySelector(container);
    // add styling to element based on type of message
    if (messageContainer.classList.length === 1) {
        messageContainer.classList.add(type);
    } else if (type === 'success') {
        messageContainer.classList.replace('failure', type);
    } else {
        messageContainer.classList.replace('success', type);
    }
    // add message text to element
    messageContainer.innerText = text;
}
// Validate input

// Sanitise input
