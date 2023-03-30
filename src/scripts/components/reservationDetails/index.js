import "../../../styles/components/reservationDetails/index.css";
import printOutReservationStatus from "../../utils/printReservationStatus";
import fitTimeTemplate from "../../utils/fitTimeTemplate";
import stateHandler from "../../utils/stateHandler";

function Details() {
  const { state } = stateHandler();
  const gridWrappers = document.querySelectorAll(".grid-area");
  const container = document.querySelector(".details-container");

  if (!state) {
    container.remove();
    const undefinedReservation = document.querySelector("h1");
    undefinedReservation.textContent = "예약자 없음";
    return null;
  }

  const { status, timeReserved, timeRegistered, customer } = state;

  if (window.innerWidth <= 720) {
    const closeButton = document.querySelector(".close");
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.querySelector("#app").appendChild(overlay);

    closeButton.addEventListener("click", () => {
      container.classList.remove("slide-up");
      overlay.remove();
    });
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
