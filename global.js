"use script";

var menu = document.getElementById("menu");
var logoDiv = document.getElementById("logo");

document.addEventListener("scroll", function() {
	if (menu.getBoundingClientRect().top < 0
	&& menu.style.position != "fixed") {
		menu.style.position = "fixed";
		menu.style.top = "0";
		menu.style.left = "0";
	} else if (logoDiv.getBoundingClientRect().bottom > 0
	&& menu.style.position == "fixed") {
		menu.style.position = "initial";
	};
});

