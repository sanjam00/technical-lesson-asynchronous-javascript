The purpose of this document is to provide indepth explanation that cannot be formatted well with just in-line comments in the index files themselves .

**displayUsers(users):**
Purpose: displaying all the users. Will be used in the second .then statement

pulls users from the array (*line 5*)
loop through the array (*.forEach*)
create a new element to display each user within the array (*contents of .forEach*)

**Fetch:**
Note: fetch is asynchronous which means if we need to use the data we fetch, we wil call it after the inital fetch has finished, so we either use a .then or use a promise/await.
    Technically, .then .catch is technically a type of promise (refer to ipad notes for specific details)

Here we are fetching from the url then using .then to handle the async Two actions we need to enact:
1, take our response object and turn it into json data using _.json()_
2, ensure we are pulling only what we want.

This is an async process so we will need a second _.then_ (*line ___*)
    this one is where we want to process/handle our data
    keep in mind, we only have access to the users data pulled from this second .then (due to scoping)
Then we console.log the data to ensure it looks correct
    purpsoe: debugging

.catch handles errors

**Async function:**
Similar to the previous fetch example, all functionality with the users array must occur in a very specific spot

In the asyn function, we call the fetch once again but we assign it to a varaible and call await on it
    const response = await
    fetch('https://jsonplaceholder.typicode.com/users');
This will cause the code in this function to *wait* for the fetch to complete before moving on (simulating the .then)

Next we difine the users array where we call await once again (*line 29*?), this time after calling .json() on the response This is effectively the code of the first .then we saw previously

Now we can hanfle our users array, only after both awaits and still within our overall async function. We will call the displayUsers func here which remains unchanged.

The use of asyn/await here is completely optional, when looking up examples online you will often see both the async/await version of a fetch as well as the .then version. Use which is more comfortable