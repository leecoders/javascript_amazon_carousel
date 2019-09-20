import { MiniCarousel } from "./components/MiniCarousel/MiniCarousel.js";
import { MainCarousel } from "./components/MainCarousel/MainCarousel.js";
import { $ } from "./util/util.js";
import { miniImages } from "./imageSrc/miniImage.js";
import mainImagesObj from "./imageSrc/mainImage.js";

const miniCarousel = new MiniCarousel(
  $(".mini-container"),
  miniImages,
  miniImages.length,
  -20
);

const mainCarousel = new MainCarousel($(".main-container"), mainImagesObj);

miniCarousel.render();
mainCarousel.render();
