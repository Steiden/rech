const allSearchInput = document.querySelectorAll(".search-input");

allSearchInput.forEach((input) => {
	const searchContent = input.querySelector(".search-input__content");
    const searchInput = input.querySelector(".search-input__input");

	searchContent.addEventListener("click", () => {
		input.classList.add("search-input--active");
        searchInput.focus();
	});

    searchInput.addEventListener("blur", () => {
        if(!searchInput.value) {
            input.classList.remove("search-input--active");
        }
    })
});
