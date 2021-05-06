//CAROSEL
let url = "https://deannaberg.no/wp-json/wp/v2/posts?_embed";
const carosel = document.querySelector("#postWrapper");

//Fetch items from API 
async function getContent() {
	try {
		const response = await fetch(url);
		const postResults = await response.json();

		console.log(postResults);

		for (let i = 0; i < postResults.length; i++){
            console.log(postResults[i]);
			
			let featureImg = postResults[i]._embedded['wp:featuredmedia']['0'].source_url;
			let category = postResults[i]._embedded['wp:term']['0']['0'].name;
			let title = postResults[i].title.rendered;
        	console.log(featureImg, title, category);

			carosel.innerHTML += `
                                        <figure class="caroselItem">
                                        <a class="caroselLink" href="#" tabindex="0">
                                            <img class="caroselImg" src="${featureImg}" alt=""/>
                                            <figcaption class="caroselContent">
                                                <h3>${category}</h3>
                                                <h2>${title}</h2>
                                            </figcaption>
                                            </a>
                                        </figure>
                                        `;	
		}
		
	} catch (error) {
		console.log("Cannot display content");
	}
	//Scroll through items

	//const scrollDuration = 300;
	//const rightButton = document.querySelector(".rightArrow");
	//const leftButton = document.querySelector(".leftArrow");

	//${rightButton}.on('click', animate(scrollLeft:${carosel},)
}
getContent();









//GET POST CONTENT
let postHeader = document.querySelector(".postHeader");
let postContent = document.querySelector(".postText");

async function getPost(){
        const response = await fetch(url);
		const json = await response.json();
        const np = json['0'];
		console.log(np);

		let featureImg = np._embedded['wp:featuredmedia']['0'].source_url;
		let title = np.title.rendered;
		let category = np._embedded['wp:term']['0']['0'].name;
		let author = np._embedded['author']['0'].name;
		let date = np.date;
		const content = np.content.rendered;
		const tags = np.tags['0'].name;

        postHeader.innerHTML += `
									<img class="featureImage" src="${featureImg}" alt="" />
									<h2 class="postTitle">${title}</h2>
									<h3 class="postAuthor vline">${author}</h3>
									<h3 class="postDate vline">${date}</h3>
									<h3 class="postCategory">${category}</h3>
									`;
		postContent.innerHTML +=`${content}`;
}
getPost();