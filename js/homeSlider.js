//CAROSEL
let url = "https://deannaberg.no/wp-json/wp/v2/posts?_embed";
const carosel = document.querySelector("#pcWrap");

async function getContent() {
	try {
		const response = await fetch(url);
		const postResults = await response.json();

		console.log(postResults);

		for (let i = 1; i < postResults.length; i++){
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
		//errorDisplay.innerHTML = "Cannot display content";
	}
}

getContent();