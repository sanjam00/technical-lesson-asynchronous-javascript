//The problem: get user data from API and display it on the web page.
//refer to notes.md for explanation

function displayUsers(users) {
    const userList = document.querySelector('#user-list');

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        userList.appendChild(listItem);
    });
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users)
    })
    .catch(error => {
        const userList = document.querySelector('#user-list');

        const errorMessage = document.createElement('li');

        errorMessage.textContent = 'Failed to load user data. Please try again later.';

        userList.appendChild(errorMessage);

        console.error('Error fetching user data:', error);

    });

//this is the alternative to the fetch statement using async/await:
async function fetchAndDisplayUsers() {
    try {
        const response = await
            fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        const userList = document.querySelector('#user-list');

        const errorMessage = document.createElement('li');

        errorMessage.textContent = 'Failed to load user data. Please try again later.';

        userList.appendChild(errorMessage);

        console.error('Error fetching user data:', error);

    }
}
fetchAndDisplayUsers();