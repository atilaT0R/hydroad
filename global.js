"use script";

var menu = document.getElementById("menu");
var logoDiv = document.getElementById("logo");

document.addEventListener("scroll", function() {
	const menuRect = menu.getBoundingClientRect();
	const logoRect = logoDiv.getBoundingClientRect();
	if (menuRect.top < 0 && menu.style.position != "fixed")
	{
		menu.style.position = "fixed";
		menu.style.top = "0";
		menu.style.left = "0";
	}
	else if (logoRect.bottom > menuRect.height
		&& menu.style.position == "fixed")
	{
		menu.style.position = "initial";
	};
});

