import headerTemplate from "./template.js";
import { $, toggleUserClickState } from "../../utils/util.js";
import { UserInfoLayer } from "../UserInfoLayer/UserInfoLayer.js";

class Header {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = headerTemplate;
    this.userInfoButton = $("#user-button");
    this.userInfoLayer = new UserInfoLayer($(".user-bubble-container"));
    this.userBubble = $(".user-bubble-container");
    this.userInfoButton.addEventListener("click", () => {
      toggleUserClickState(this.userBubble);
    });
  }
}

export { Header };
