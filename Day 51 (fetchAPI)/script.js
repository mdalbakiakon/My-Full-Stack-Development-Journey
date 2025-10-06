// fetch() is a modern way to make HTTP requests (e.g., GET, POST) from JavaScript.
// It’s built into the browser — no need for libraries like Axios or jQuery.


let x = fetch('https://jsonplaceholder.typicode.com/posts/1')

x.then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data))   // Use the data
  .catch(error => console.error('Error:', error));
