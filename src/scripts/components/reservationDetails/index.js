import "../../../styles/components/reservationDetails/index.css";
import printOutReservationStatus from "../../utils/printReservationStatus";
import fitTimeTemplate from "../../utils/fitTimeTemplate";
import stateHandler from "../../utils/stateHandler";

function Details() {
  const { state: response } = stateHandler();
  const gridWrappers = document.querySelectorAll(".grid-area");
  const container = document.querySelector(".details-container");
  let viewFullMemo = false;

  if (!response) {
    container.remove();
    const undefinedReservation = document.querySelector("h1");
    undefinedReservation.textContent = "예약자 없음";
    return null;
  }

  const { status, timeReserved, timeRegistered, customer } = response;

  if (window.innerWidth <= 720) {
    const closeButton = document.querySelector(".close");
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.querySelector("#app").appendChild(overlay);

    [closeButton, overlay].forEach((el) => {
      el.addEventListener("click", () => {
        container.classList.remove("slide-up");
        overlay.remove();
        viewFullMemo = false;
      });
    });
  }

  const [state, reserved, registered] = gridWrappers[0].querySelectorAll("dd");
  const [name, level, memo] = gridWrappers[1].querySelectorAll("dd");
  const [request] = gridWrappers[2].querySelectorAll("dd");
  memo.style.cursor = "pointer";

  [state, reserved, registered, name, level, memo, request].forEach((el, i) => {
    const element = el;
    if (i === 0) printOutReservationStatus(element, status);
    else if (i === 1) fitTimeTemplate(element, timeReserved);
    else if (i === 2) fitTimeTemplate(element, timeRegistered);
    else if (i === 3) element.innerHTML = customer.name;
    else if (i === 4) element.innerHTML = customer.level || "-";
    else if (i === 5) element.innerHTML = customer.memo || "-";
    else if (i === 6) element.innerHTML = customer.request || "-";
  });

  memo.addEventListener("click", () => {
    if (viewFullMemo) {
      memo.classList.remove("view-full-memo");
      container.classList.remove("view-full-memo");
      gridWrappers[1].classList.remove("view-full-memo");
      viewFullMemo = false;
    } else {
      memo.classList.add("view-full-memo");
      container.classList.add("view-full-memo");
      gridWrappers[1].classList.add("view-full-memo");
      viewFullMemo = true;
    }
  });
}

export default Details;
