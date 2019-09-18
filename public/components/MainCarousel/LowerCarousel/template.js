let liTemplate = "";
for (let i = 0; i < 17; ++i) {
  liTemplate += /*html*/ `
  <li class="lower-li-area">
    <img class="lower-carousel-image"></img>
    <span class="lower-text-container">
      <div class="lower-text-title">PRIME VIDEO</div>
      <div class="lower-text-head">Watch movies, TV, live events, and more</div>
      <div class="lower-text-body">As a Prime member, you can watch exclusive Amazon Originals and thousands of popular movies and TV shows—all at no extra cost. Watch at home or on the go with practically any device.</div>
      <div class="lower-text-tail"><a>Explore Prime Video</a></div>
    </span>
  </li>`;
}

export default /*html*/ `
  <div class="lower-carousel-container">
    <div class="lower-carousel-left-button-area">
      <button
        id="lower-carousel-left-button"
        class="lower-carousel-button"
      ></button>
    </div>
    <div class="lower-carousel-center">
      <div class="lower-img-container">
        <ul id="lower-carousel-image-deque">
          ${liTemplate}
        </ul>
      </div>
    </div>
    <div class="lower-carousel-right-button-area">
      <button
        id="lower-carousel-right-button"
        class="lower-carousel-button"
      ></button>
    </div>
  </div>
`;
