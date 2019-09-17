import { MiniCarousel } from "./components/MiniCarousel/MiniCarousel.js";
import { $ } from "./util/util.js";
import { miniImages } from "./imageSrc/miniImage.js";

const firstContainer = $(".first-container");
const miniCarousel = new MiniCarousel(firstContainer, miniImages, 4, -20);
miniCarousel.render();
