import "../../../styles/components/reservationDetails/index.css";
import printOutReservationStatus from "../../utils/printReservationStatus";
import fitTimeTemplate from "../../utils/fitTimeTemplate";
import stateHandler from "../../utils/stateHandler";

function Details() {
  const { state } = stateHandler();
  const { status, timeReserved, timeRegistered, customer } = state;

  const gridWrappers = document.querySelectorAll(".grid-area");

  if (window.innerWidth <= 720) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    const container = document.querySelector(".details-container");
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", () => {
      closeButton.style.visibility = "hidden";
      container.style.visibility = "hidden";
    });
    document.querySelector("#app").appendChild(overlay);
  }

  const reservationInfo = gridWrappers[0].querySelectorAll("dd");
  const clientInfo = gridWrappers[1].querySelectorAll("dd");
  const requestedTerm = gridWrappers[2].querySelectorAll("dd");

  [...reservationInfo, ...clientInfo, ...requestedTerm].forEach((el, i) => {
    if (i === 0) printOutReservationStatus(el, status);
    else if (i === 1) fitTimeTemplate(el, timeReserved);
    else if (i === 2) fitTimeTemplate(el, timeRegistered);
    else if (i === 3) el.innerHTML = customer.name;
    else if (i === 4) el.innerHTML = customer.level || "-";
    else if (i === 5) el.innerHTML = customer.memo || "-";
    else if (i === 6) el.innerHTML = customer.request || "-";
  });
}

export default Details;
