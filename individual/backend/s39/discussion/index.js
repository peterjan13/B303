console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

// The fetch() function returns a promise which can then be chained using the then() function. The then() function waits for the promise to be resolved before executing code.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) // Converts the JSON string from the response into regular javascript format
  .then((posts) => console.log(posts));

//   As of ES6, the async/await syntax
async function fetchData() {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");

  let json_result = await result.json();

  console.log(json_result);
}

fetchData();

// Adding headers, body, and method to the fetch() function
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New post!",
    body: "Hello World.",
    userId: 2,
  }),
})
  .then((response) => response.json())
  .then((created_post) => console.log(created_post));

// UPDATING EXISTING POST
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Corrected Post!",
  }),
})
  .then((response) => response.json())
  .then((updated_post) => console.log(updated_post));

//  DELETING EXISTING POST
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((deleted_post) => console.log(deleted_post));

// FILTERING POSTS
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => response.json())
  .then((post) => console.log(post));

// GETTING COMMENTS OF A POST
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => response.json())
  .then((comments) => console.log(comments));
