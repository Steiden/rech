import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('[data-fancybox="aboutGallery"', {
	hideScrollbar: false,

	Toolbar: {
		absolute: false,
		display: {
			left: [],
			middle: [],
			right: ["close"],
		},
	},

	Thumbs: {
		type: "classic",
	},

	Carousel: {
		transition: "slide",

		Navigation: {
			prevTpl: `
                    <i class="d_icon-quotation-left-red slider__arrow-icon"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                    ></i>
            `,
			nextTpl: `
                    <i class="d_icon-quotation-right-red slider__arrow-icon"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                    ></i>
            `,
		},
	},

	tpl: {
		closeButton: `
            <button class="f-button is-close-btn close-button" data-fancybox-close title="Закрыть" id="projectSwiperPrev">
                <i class="d_icon d_icon-close close-button__icon"></i>
            </button>
        `,
	},
});

Fancybox.bind('[data-fancybox="productsGallery"', {});

Fancybox.bind('[data-fancybox="projectsGallery1"', {});

Fancybox.bind('[data-fancybox="projectsGallery2"', {});
