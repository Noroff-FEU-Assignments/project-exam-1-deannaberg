let cardWrap = document.querySelector(".cardWrap");
let loadButton = document.querySelector("#loadMore");

const queryString = document.location.search;
    console.log(queryString);
const params = new URLSearchParams(queryString);
    console.log(params)

const id = params.get('id');
    console.log(id);


const categoryAPI = "https://deannaberg.no/wp-json/wp/v2/posts?categories=" + id + "&_embed";
console.log(categoryAPI);


async function getCategoryPosts() {
    const response = await fetch(categoryAPI);
	let catResults = await response.json();
	    console.log(catResults);
    for (let i = 0; i < catResults.length; i++) {
        console.log(catResults[i]);
        
        const cardDate = new Date(catResults[i].date).toLocaleString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",});
        const id = catResults[i].id;
        const cardTitle = catResults[i].title.rendered;
        const cardImage = catResults[i]._embedded["wp:featuredmedia"]["0"].source_url;
        const cardAlt = catResults[i]._embedded["wp:featuredmedia"]["0"].alt_text;
        
        cardWrap.innerHTML += `<figure class="postCard"><a href="page.html?id=${id}">
                                <img src="${cardImage}" alt="${cardAlt}"/>
                                <figcaption>
                                <span class="date">${cardDate}</span>
                                <h2>${cardTitle}</h2>
                                </figcaption></a>
                                </figure>`;
        
        if(catResults.length >= 9){
            loadButton.style.display = "block";
        };
        loadButton.addEventListener("click", getMoreCatPosts);
    }
}
getCategoryPosts()

async function getMoreCatPosts(){
    const nextPage = categoryAPI + "&page=2";
    const response = await fetch(nextPage);
    const nextResults = await response.json();
        console.log(nextResults);
        
    for (let i = 0; i < nextResults.length; i++) {
        console.log(nextResults[i]);
        
        const cardDate = new Date(nextResults[i].date).toLocaleString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",});
        const id = nextResults[i].id;
        const cardTitle = nextResults[i].title.rendered;
        const cardImage = nextResults[i]._embedded["wp:featuredmedia"]["0"].source_url;
        const cardAlt = nextResults[i]._embedded["wp:featuredmedia"]["0"].alt_text;
        
        cardWrap.innerHTML += `<figure class="postCard"><a href="page.html?id=${id}">
                                <img src="${cardImage}" alt="${cardAlt}"/>
                                <figcaption>
                                <span class="date">${cardDate}</span>
                                <h2>${cardTitle}</h2>
                                </figcaption></a>
                                </figure>`;
}
        loadButton.style.display ="none";
}

