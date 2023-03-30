import "../styles/index.css";

import getReservationList from "./api";

import Card from "./components/reservationCard/index";
import Details from "./components/reservationDetails/index";

const mediaQuery = window.matchMedia("(max-width: 720px)");

function handleMediaChange(e) {
  const popupCloseButton = document.querySelector(".close");
  const overlay = document.querySelector(".overlay");

  if (popupCloseButton === null) return;

  if (e.matches) {
    popupCloseButton.style.visibility = "visible";
  } else {
    popupCloseButton.style.visibility = "hidden";
    overlay !== null && overlay.remove();
  }
}
mediaQuery.addEventListener("change", handleMediaChange);

export default (async function componentsBasket() {
  const res = await getReservationList();
  const responsefiltering = res.filter((item) => item.status !== "done");

  return {
    card: Card(responsefiltering),
    details: Details(responsefiltering),
  };
})();
