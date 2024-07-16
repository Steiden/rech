// Установка ширины поля ввода под текст placeholder
const fixInputWidthList = document.querySelectorAll("[data-fix-input-width]");
fixInputWidthList.forEach((input) => {
	input.setAttribute("size", input.placeholder.length);
});
