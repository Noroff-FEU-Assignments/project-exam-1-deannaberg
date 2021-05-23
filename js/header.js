//Call API
let url = "https://deannaberg.no/wp-json/wp/v2/";

//Populate Navigation

const navContainer = document.querySelector("#navContainer");
const categoryUrl = url + "categories";
console.log(categoryUrl);

async function getNavContent() {
	try {
		const response = await fetch(categoryUrl);
		const navResults = await response.json();
		console.log(navResults);

		for (let i = 0; i < navResults.length; i++) {
			console.log(navResults[i]);

            const categoryName = navResults[i].name;
            const id = navResults[i].id;
                console.log(categoryName, id);
        
            navContainer.innerHTML += `<a href="category.html?id=${id}">${categoryName}</a>`
            
        };
    }catch (error) {
		console.log("Cannot display content");
	}}
getNavContent()
    
//DROPDOWN MENU
const nav = document.querySelector("nav");

document.querySelector (".closeButton").addEventListener("click", closeMenu);
document.querySelector ("#dropMenu").addEventListener("click", showMenu);

function showMenu(){
    nav.setAttribute ("class", "menuShow");
}

function closeMenu(){
    nav.removeAttribute ("class", "menuShow");
    nav.setAttribute("class", "menuHide");
}

//DROPDOWN SEARCH
const search = document.querySelector("#searchBox");

document.querySelector (".searchButton").addEventListener("click", closeSearch);
document.querySelector ("#searchDrop").addEventListener("click", showSearch);

function showSearch(){
    search.setAttribute ("class", "searchShow");
}

function closeSearch(){
    search.removeAttribute ("class", "searchShow");
    search.setAttribute("class", "searchHide");
}

//NAV
