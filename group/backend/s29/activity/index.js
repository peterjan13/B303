fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    showPosts(data);
  });

document.querySelector("#form-add-post").addEventListener("submit", (e) => {
  //Prevents defeault behavior of form elements
  e.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: document.querySelector("#txt-title").value,
      body: document.querySelector("#txt-body").value,
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Post Successfully Created.");

      document.querySelector('#div-post-entries').innerHTML += `
				<div id="post-${data.id}">
					<h3 id="post-title-${data.id}">${data.title}</h3>
					<p id="post-body-${data.id}">${data.body}</p>
					<button onclick="editPost('${data.id}')">Edit</button> 
					<button onclick="deletePost('${data.id}')">Delete</button> 
				</div>
			`

      document.querySelector("#txt-title").value = null;
      document.querySelector("#txt-body").value = null;
    });
});

const showPosts = (posts) => {
  let postEntries = "";

  posts.forEach((post) => {
    //JSX syntax - JS Extended
    postEntries += `
			<div id="post-${post.id}">
				<h3 id="post-title-${post.id}">${post.title}</h3>
				<p id="post-body-${post.id}">${post.body}</p>
				<button onclick="editPost('${post.id}')">Edit</button> 
				<button onclick="deletePost('${post.id}')">Delete</button> 
			</div>
		`;
  });
  document.querySelector("#div-post-entries").innerHTML = postEntries;
};

const editPost = (id) => {
  let title = document.querySelector(`#post-title-${id}`).innerHTML;
  let body = document.querySelector(`#post-body-${id}`).innerHTML;

  document.querySelector("#txt-edit-id").value = id;
  document.querySelector("#txt-edit-title").value = title;
  document.querySelector("#txt-edit-body").value = body;
  document.querySelector("#btn-submit-update").removeAttribute("disabled");
};

const deletePost = (id) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
  })
    .then((response) => console.log(response.json()))
    .then((data) => {
      console.log(data);
      alert("Post has beed Deleted Successfully.");

      const postElement = document.getElementById(`post-${id}`);
      if (postElement) {
        postElement.remove();
      }
    });
};

document.querySelector("#form-edit-post").addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: document.querySelector("#txt-edit-id").value,
      title: document.querySelector("#txt-edit-title").value,
      body: document.querySelector("#txt-edit-body").value,
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Post Updated Successfully");

      document.querySelector(`#post-title-${document.querySelector('#txt-edit-id').value}`).innerHTML = document.querySelector('#txt-edit-title').value;
			document.querySelector(`#post-body-${document.querySelector('#txt-edit-id').value}`).innerHTML = document.querySelector('#txt-edit-body').value;

      document.querySelector("#txt-edit-id").value = null;
      document.querySelector("#txt-edit-title").value = null;
      document.querySelector("#txt-edit-body").value = null;
      document
        .querySelector("#btn-submit-update")
        .setAttribute("disabled", true);
    });
});

document.querySelector('#delete-all').addEventListener('click', (e) => {
  e.preventDefault();
    alert('All Posts Deleted');
  document.querySelector("#div-post-entries").innerHTML = "";
});