import headerTemplate from "./template.js";
import { $, toggleUserClickState } from "../../utils/util.js";
import { UserInfoLayer } from "../UserInfoLayer/UserInfoLayer.js";

class Header {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  setEvent = () => {
    this.userInfoButton.addEventListener("click", () => {
      toggleUserClickState(this.userBubble);
    });
  };

  render() {
    this.parentElement.innerHTML = headerTemplate;
    this.userInfoButton = $("#user-button");
    this.userInfoLayer = new UserInfoLayer($(".user-bubble-container"));
    this.userBubble = $(".user-bubble-container");
    this.setEvent();
  }
}

export { Header };
