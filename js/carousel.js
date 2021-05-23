
const forwardButton = document.querySelector(".rightButton");
const backButton = document.querySelector(".leftButton");
const carousel = document.querySelector(".carousel");
let width = carousel.offsetWidth;
let carouselContent = document.querySelector("#carouselInner");

const moveForward = function(){
  carousel.scrollBy(width, 0);
}
const moveBack = function(){
  carousel.scrollBy(-(width), 0);
}

forwardButton.addEventListener("click", moveForward);
backButton.addEventListener("click", moveBack);


carUrl = url + `posts?_embed`;
console.log(carUrl);

async function getCarouselContent() {
	try {
		const response = await fetch(carUrl);
		const carResults = await response.json();

		console.log(carResults);

		for (let i = 1; i < carResults.length; i++) {
			console.log(carResults[i]);
			
			let featureImg = carResults[i]._embedded["wp:featuredmedia"]["0"].source_url;
			let category = carResults[i]._embedded["wp:term"]["0"]["0"].name;
			let title = carResults[i].title.rendered;
			let id = carResults[i].id;
				console.log(featureImg, title, category, id);

			carouselContent.innerHTML += `<a class="caroselLink" href="page.html?id=${id}" alt="carosel image">
                                        	<div id="item" class="caroselItem">
                                            	<img class="caroselImg" src="${featureImg}" alt=""/>
                                            <div class="carouselText">
                                                <h3>${category}</h3>
                                                <h2>${title}</h2>
                                            </div>
                                        	</div>
											</a>`;
		}
	} catch (error) {
		console.log("Cannot display content");
	}
}
getCarouselContent();
