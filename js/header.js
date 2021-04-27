//DROPDOWN MENU
const nav = document.querySelector("#nav");

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


