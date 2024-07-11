import IMask from "imask";

const createTelMask = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach((input) => {
        new IMask(input, {
            mask: "+{7} (000) 000-00-00",
            lazy: true,
        });
    });
}

createTelMask("[type=tel]");


new IMask(document.getElementById("callbackModalTime"), {
    mask: "000:00-00:00"
})