//GET POST CONTENT
let postHeader = document.querySelector(".postHeader");
let postContent = document.querySelector(".postText");
    
const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params)

const id = params.get('id');
console.log(id);

const postAPI = "https://deannaberg.no/wp-json/wp/v2/posts/" + id + `?_embed`;
console.log(postAPI);

async function getPost() {
	const response = await fetch(postAPI);
	const json = await response.json();
	const np = json;
	console.log(np);
	
	let featureImg = np._embedded["wp:featuredmedia"]["0"].source_url;
	let title = np.title.rendered;
	let category = np._embedded["wp:term"]["0"]["0"].name;
	let author = np._embedded["author"]["0"].name;
	let date= new Date(np.date).toLocaleString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric",})
	let content = np.content.rendered;
	
	postHeader.innerHTML += `
									<img class="featureImage" src="${featureImg}" alt="" />
									<h2 class="postTitle">${title}</h2>
									<h3 class="postAuthor vline">${author}</h3>
									<h3 class="postDate vline">${date}</h3>
									<h3 class="postCategory">${category}</h3>
									`;
	postContent.innerHTML += `${content}`;
	
	const postImage = document.querySelectorAll(".postText img");
		console.log(postImage);
	postImage.forEach(modal);
}
getPost()

