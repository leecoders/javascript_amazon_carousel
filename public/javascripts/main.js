import { $ } from "./util/util.js";
import { miniImages } from "./miniImage.js";

let size = 4;
let left = -20;
let trans = 0;
const renderImages = () => {
  for (let i = 0; i < 4; ++i) {
    $(".img-deque").children[i].firstChild.src = miniImages[i].src;
  }
};

renderImages();

const moveImagesToLeft = () => {
  left -= 20;
  trans += 20;
  const cloneNode = $(".img-deque").children[size - 1].cloneNode(true);
  $(".img-deque").insertAdjacentElement("afterbegin", cloneNode);
  $(".img-deque").style.left = left + "rem";
  $(".img-deque").style.transform = `translate(${trans}rem)`;
  $(".img-deque").removeChild($(".img-deque").children[size]);
};

const moveImagesToRight = () => {
  left += 20;
  trans -= 20;
  const cloneNode = $(".img-deque").children[0].cloneNode(true);
  $(".img-deque").insertAdjacentElement("beforeend", cloneNode);
  $(".img-deque").style.left = left + "rem";
  $(".img-deque").style.transform = `translate(${trans}rem)`;
  $(".img-deque").removeChild($(".img-deque").children[0]);
};

$("#mini-carousel-left-button").addEventListener("click", () => {
  moveImagesToLeft();
});

$("#mini-carousel-right-button").addEventListener("click", () => {
  moveImagesToRight();
});
