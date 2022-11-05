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
//FLIP CARD
let locations = document.querySelectorAll(".locations");
let foods = document.querySelectorAll(".food");

for(let i = 0; i < locations.length; i++){
	locations[i].addEventListener("click", function(event){
		for (let j = 0; j < locations.length; j++) {
			if(j != i){
				locations[j].classList.remove("active");	
			}
		}
		locations[i].classList.toggle("active");

		
		
		//Selecciona todas las card, posteriormente comprueba
		//Si la card tiene la clase enlezada con el padre.
		for (let j = 0; j < foods.length; j++) {
			
			foods[j].classList.add("d-block");
			foods[j].classList.add("animate__animated", "animate__bounceInDown");
			
			

			if(locations[i].classList.contains("active")){
				if(foods[j].classList.contains("food-"+(i+1)) === false){
					foods[j].classList.remove("d-block");
				}
			}
			
		}


	})


}