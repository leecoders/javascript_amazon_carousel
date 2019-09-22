import headerTemplate from "./template.js";
import { $ } from "../../utils/util.js";

class Header {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  render() {
    this.parentElement.innerHTML = headerTemplate;
  }
}

export { Header };
