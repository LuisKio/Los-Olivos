//PHOTOS DESKTOP
if(document.body.clientWidth >= 992){
	let file = ["food-1", "food-2", "food-3", "food-4", "food-5", "food-6", "food-7", "food-8", "food-9",];
	for(let i = 1; i <= 9; i++){
		for(let j = 1; j <= 9; j++){
			document.querySelector(".grid-"+i+j).style.backgroundImage = `url("img/platillo/${file[i-1]}/${file[i-1]}-${j}.jpg")`;
		}
	}
}

//NAVBAR
window.addEventListener('scroll',function(){
	let navbar = document.getElementById('nav');
	navbar.classList.toggle("sticky", window.scrollY > 2);
});

//TOGGLE
let toggle = document.getElementById('btn-toggle');

toggle.addEventListener("click",function(event){
	toggle.classList.toggle("btn-active");
	document.getElementById("menu-toggle").classList.toggle("open-menu");
});

//BTNWHATSAPP
window.addEventListener('scroll',function(){
	let whatsapp = document.getElementById('whatsapp');
	whatsapp.classList.toggle("d-block", window.scrollY > 2);
});

//CHAT-WPP
let wpp = document.getElementById("chat-wpp");
let wppShow = document.getElementById("show-wpp");
let wppExit = document.getElementById("chat-exit");
let wppSend = document.getElementById("wpp-send");



wppShow.addEventListener("click", function(event){
	wpp.style.display = "block";
});

wppExit.addEventListener("click", function(event){
	wpp.style.display = "none";
});

wppSend.addEventListener("click", function(event){
	let msg = document.getElementById("wpp-txt").value;
	window.open("http://web.whatsapp.com/send?phone=+526673096769&text="+msg);
});

//PHOTOS DESKTOP
if(document.body.clientWidth >= 992){
	let footRow = document.querySelectorAll(".food-photos");
	let footGallery = document.querySelectorAll(".food-photos > div");

	for(let i = 0; i < footGallery.length; i++){
		footGallery[i].addEventListener("mouseover", function(event){
			event.preventDefault();
			let page = this.getAttribute('rel');

			for(let j = 1; j <= 9; j++){
				let grid = document.querySelectorAll(`.grid-${page+j}`);

				for(let k = 0; k < grid.length; k++){
					grid[k].style.width = "98.5%";
				}

				for(let k = 0; k < footRow.length; k++){
					footRow[k].style.marginTop = "5px";
				}
			}
		});

		footGallery[i].addEventListener("mouseout", function(event){
			event.preventDefault();
			let view = document.querySelectorAll(".grid-view");

			for(let k = 0; k < footRow.length; k++){
				footRow[k].style.marginTop = "30px";
			}

			for(let i = 0; i < view.length; i++){
				view[i].style.width = "0";
			}
		});
	}

}
