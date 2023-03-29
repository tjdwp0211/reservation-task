import "../styles/index.css";

import getReservationList from "./api";

import Card from "./components/reservationCard/index";
import Details from "./components/reservationDetails/index";

export default (async function componentsBasket() {
  const res = await getReservationList();

  return {
    card: Card(res),
    details: Details(res),
  };
})();
