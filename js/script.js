// Header (Catalog)
const header = document.getElementById("header");
const headerMenu = document.getElementById("headerMenu");

const catalogButton = document.getElementById("catalogButton");
const closeCatalogButton = document.getElementById("closeCatalogButton");

catalogButton.addEventListener("click", () => {
	catalogButton.style.display = "none";
	closeCatalogButton.style.display = "flex";
	header.classList.add("header--all");
	headerMenu.style.display = "flex";
	document.body.style.overflow = "hidden";
});

closeCatalogButton.addEventListener("click", () => {
	catalogButton.style.display = "flex";
	closeCatalogButton.style.display = "none";
	header.classList.remove("header--all");
	headerMenu.style.display = "none";
	document.body.style.overflow = "auto";
});

const desktopCatalogButton = document.getElementById("desktopCatalogButton");
const catalog = document.getElementById("catalog");
let desktopCatalogButtonIsCliked = false;

desktopCatalogButton.addEventListener("mouseenter", () => {
	catalog.classList.add("catalog--visible");
	desktopCatalogButtonIsCliked = true;
});

desktopCatalogButton.addEventListener("mouseleave", () => {
	catalog.classList.remove("catalog--visible");
	desktopCatalogButtonIsCliked = false;
});

// Map
const markers = document.querySelectorAll(".map__marker");
markers.forEach((marker) => {
	marker.addEventListener("click", (e) => {
		if (marker.classList.contains("map__marker--active")) {
			marker.classList.remove("map__marker--active");
			marker.querySelector(".marker__button").style.zIndex = 50;
		} else {
			marker.classList.add("map__marker--active");
			marker.querySelector(".marker__button").style.zIndex = 55;
		}
	});
});

// Actions
const actions = document.getElementById("actions");
const closeActionsButton = document.getElementById("closeActions");
let iscloseActionsButtonClicked = false;
closeActionsButton.addEventListener("click", () => {
	if (!iscloseActionsButtonClicked) {
		actions.classList.add("actions--show");
		iscloseActionsButtonClicked = true;
	} else {
		actions.classList.remove("actions--show");
		iscloseActionsButtonClicked = false;
	}
});
window.addEventListener("scroll", () => {
	const currTop = window.scrollY;
	if (currTop > 500) {
		actions.classList.add("actions--visible");
	}
});