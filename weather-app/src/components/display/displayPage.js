import Element from '../element';
import today from "./today";


function displayPage() {
  const backgroundOverlay = new Element("div", "background-overlay", "body");

  today();
}

export default displayPage;
