const allSelect = document.querySelectorAll(".select");

allSelect.forEach((select) => {
	const selectButton = select.querySelector(".select__content");
	const selectList = select.querySelector(".select__list");
	const selectItems = selectList.querySelectorAll(".select__item");
	let isClicked = false;

	selectButton.addEventListener("click", () => {
		if (!isClicked) {
			select.classList.add("select--active");
			isClicked = true;
		} else {
			select.classList.remove("select--active");
			isClicked = false;
		}
	});

	selectItems.forEach((item) => {
		item.addEventListener("click", () => {
			const selectInput = select.querySelector(".select__text");
			selectInput.textContent = item.textContent.trim();
			selectInput.value = item.textContent.trim();
			select.classList.remove("select--active");
			isClicked = false;
		});
	});

	window.addEventListener("click", (e) => {
		if (!select.contains(e.target)) {
			select.classList.remove("select--active");
			isClicked = false;
		}
	});
});
