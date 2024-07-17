import "./style.scss";
import { popup } from "./scripts/popup";

popup({
  backdropSelector: ".backdrop",
  popupSelector: ".popup",
  openBtnSelector: ".open-popup-btn",
});
