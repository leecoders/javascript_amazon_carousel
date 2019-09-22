// import "@babel/polyfill"; // for web-pack
import { Header } from "./components/Header/Header.js";
import { Nav } from "./components/Nav/Nav.js";
import { Section } from "./components/Section/Section.js";
import { Footer } from "./components/Footer/Footer.js";
import { MiniCarousel } from "./components/MiniCarousel/MiniCarousel.js";
import { MainCarousel } from "./components/MainCarousel/MainCarousel.js";
import { $ } from "./utils/util.js";
import { miniImages } from "./image_objs/miniImage.js";
import mainImagesObj from "./image_objs/mainImage.js";

const header = new Header($("header"));
const nav = new Nav($("nav"));
const section = new Section($("section"));
const footer = new Footer($("footer"));

// const miniCarousel = new MiniCarousel(
//   $(".mini-container"),
//   miniImages,
//   miniImages.length,
//   -20
// );

// const mainCarousel = new MainCarousel($(".main-container"), mainImagesObj);
