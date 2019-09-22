import headerTemplate from "./template.js";
import { $ } from "../../utils/util.js";
import { UserInfoLayer } from "../UserInfoLayer/UserInfoLayer.js";

class Header {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.isUserButtonClicked = false;
    this.render();
  }

  toggleUserClickState = () => {
    this.isUserButtonClicked = !this.isUserButtonClicked;
    if (this.isUserButtonClicked) {
      $(".outside").style.visibility = "visible";
      document.body.style.overflow = "hidden";
      this.userBubble.style.visibility = "visible";
    } else {
      $(".outside").style.visibility = "hidden";
      document.body.style.overflow = "scroll";
      this.userBubble.style.visibility = "hidden";
    }
  };

  render() {
    this.parentElement.innerHTML = headerTemplate;
    this.userInfoButton = $("#user-button");
    this.userInfoLayer = new UserInfoLayer($(".user-bubble-container"));
    this.userBubble = $(".user-bubble-container");
    this.userBubble.style.visibility = "hidden";
    this.userInfoButton.addEventListener("click", this.toggleUserClickState);
  }
}

export { Header };
