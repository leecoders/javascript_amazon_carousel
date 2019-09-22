import userInfoLayerTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class UserInfoLayer {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = userInfoLayerTemplate;
  }
}

export { UserInfoLayer };
