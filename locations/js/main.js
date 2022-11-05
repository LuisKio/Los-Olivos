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

//LOCATIONS

let elementos = document.querySelectorAll(".location-item");

for(let i = 0; i < elementos.length; i++){
	elementos[i].addEventListener("mouseover", function(event){
		
		this.childNodes[1].style.display = "block";
		this.childNodes[3].style.display = "none";
	});

	elementos[i].addEventListener("mouseout", function(event){
		
		this.childNodes[1].style.display = "none";
		this.childNodes[3].style.display = "block";
	});


}


