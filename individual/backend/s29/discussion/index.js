// console.log("Hello World!");

// Get post data - to retrieve data from jsonplaceholder API.
//Promise chain
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => {
	// console.log(data)
	showPosts(data)
});


// console.log(document)
// console.log(document.querySelector('#form-add-post'))
// let textTitle = document.querySelector('#txt-title').value
// console.log(textTitle);

// Add Post Data
document.querySelector('#form-add-post').addEventListener('submit', (e) => {

	//Prevent the default behavior of our Form element.
	e.preventDefault();
	//function code block or task after triggering the event.

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: "POST",
		body: JSON.stringify({
			title: document.querySelector('#txt-title').value,
			body: document.querySelector('#txt-body').value,
			userId: 1
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		alert('Post Successfully created.');

		document.querySelector('#txt-title').value = null;
		document.querySelector('#txt-body').value = null;

	})
});

// Show post - to display all the posts objects from our jsonplaceholder API.
const showPosts = (posts) => {
	let postEntries = '';

	posts.forEach((post) => {
		//JSX Syntax - JavaScript Extended /Extension
		postEntries += `
			<div id="post-${post.id}">
				<h3 id="post-title-${post.id}">${post.title}</h3>
				<p id="post-body-${post.id}">${post.body}</p>
				<button onclick="editPost(${post.id})">Edit</button>
				<button onclick="deletePost(${post.id})">Delete</button>
			</div>
		`;
	});

	document.querySelector('#div-post-entries').innerHTML = postEntries;

};


//Edit Post form.
const editPost = (id) => {
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	document.querySelector('#txt-edit-id').value = id;
	document.querySelector('#txt-edit-title').value = title;
	document.querySelector('#txt-edit-body').value = body;
	document.querySelector('#btn-submit-update').removeAttribute('disabled');
}

//Update Button function
//Update Post
document.querySelector('#form-edit-post').addEventListener('submit', (e) => {
	e.preventDefault();

	fetch('https://jsonplaceholder.typicode.com/posts/1', {
		method: "PUT",
		body: JSON.stringify({
			id: document.querySelector('#txt-edit-id').value,
			title: document.querySelector('#txt-edit-title').value,
			body: document.querySelector('#txt-edit-body').value,
			userId: 1
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		alert("Post updated successfully!")

		document.querySelector('#txt-edit-id').value = null;
		document.querySelector('#txt-edit-title').value = null;
		document.querySelector('#txt-edit-body').value = null;
		document.querySelector('#btn-submit-update').setAttribute('disabled', true);

	})

});