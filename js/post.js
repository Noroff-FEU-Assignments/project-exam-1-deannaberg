//GET POST CONTENT
let postHeader = document.querySelector(".postHeader");
let postContent = document.querySelector(".postText");
const recentPostAPI = url + "posts?_embed";
async function getPost() {
	const response = await fetch(recentPostAPI);
	const json = await response.json();
	const np = json["0"];
	console.log(np);

	let featureImg = np._embedded["wp:featuredmedia"]["0"].source_url;
	let title = np.title.rendered;
	let category = np._embedded["wp:term"]["0"]["0"].name;
	let author = np._embedded["author"]["0"].name;
	let date= new Date(np.date).toLocaleString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric",})
	const content = np.content.rendered;
	//let image = np.content.rendered.match(/https.*?\.jpg/g);
	//console.log(image);

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
getPost();


