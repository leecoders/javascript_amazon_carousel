import { $ } from "./util/util.js";
import { miniImages } from "./miniImage.js";

class MiniCarousel {
  constructor(miniImages, listCnt, listWidth) {
    this.miniImages = miniImages;
    this.listCnt = listCnt;
    this.leftEnd = -listWidth;
    this.transDist = 0;
  }

  renderImages = () => {
    for (let i = 0; i < this.listCnt; ++i) {
      $(".img-deque").children[i].firstChild.src = this.miniImages[i].src;
    }
  };

  moveImagesToLeft = () => {
    this.leftEnd -= 20;
    this.transDist += 20;
    const cloneNode = $(".img-deque").children[this.listCnt - 1].cloneNode(
      true
    );
    $(".img-deque").insertAdjacentElement("afterbegin", cloneNode);
    $(".img-deque").style.left = this.leftEnd + "rem";
    $(".img-deque").style.transform = `translate(${this.transDist}rem)`;
    $(".img-deque").removeChild($(".img-deque").children[this.listCnt]);
  };

  moveImagesToRight = () => {
    this.leftEnd += 20;
    this.transDist -= 20;
    const cloneNode = $(".img-deque").children[0].cloneNode(true);
    $(".img-deque").insertAdjacentElement("beforeend", cloneNode);
    $(".img-deque").style.left = this.leftEnd + "rem";
    $(".img-deque").style.transform = `translate(${this.transDist}rem)`;
    $(".img-deque").removeChild($(".img-deque").children[0]);
  };

  render = () => {
    this.renderImages();
    $("#mini-carousel-left-button").addEventListener(
      "click",
      this.moveImagesToLeft
    );

    $("#mini-carousel-right-button").addEventListener(
      "click",
      this.moveImagesToRight
    );
  };
}

const mini = new MiniCarousel(miniImages, 4, 20);
mini.render();
