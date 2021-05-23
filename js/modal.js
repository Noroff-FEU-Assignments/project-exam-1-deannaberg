let modalWrapper = document.querySelector("#modalBackground");
let button = document.querySelector("#modalButton");
let img = document.querySelector("#modalImage");

const modal = function(el){
	el.addEventListener("click", function(){
		modalImage.src = el.src;
		modalImage.alt = el.alt;	 
		modalWrapper.classList.replace('hide', 'show');
			console.log("I've been clicked!");
	});
	modalWrapper.addEventListener("click", event =>{
		if(event.target === modalWrapper){
		modalWrapper.classList.replace('show', 'hide');
		};
		if(event.target === button){
		modalWrapper.classList.replace('show', 'hide');
		};
	});
}	

