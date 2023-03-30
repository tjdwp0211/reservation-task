import "../../../styles/components/reservationCard/index.css";
import printReservationStatus from "../../utils/printReservationStatus";
import fitTimeTemplate from "../../utils/fitTimeTemplate";
import stateHandler from "../../utils/stateHandler";
import Details from "../reservationDetails";

function Card(response) {
  const { handler } = stateHandler(response[0]);
  const cardsWrapper = document.querySelector(".cards-wrapper");
  const appendChildLoop = (parents, childrenArr) => {
    childrenArr.forEach((child) => parents.appendChild(child));
  };

  response.forEach((res, i) => {
    const newList = document.createElement("li");
    newList.addEventListener("click", () => {
      handler(res);
      Details();
      if (window.innerWidth <= 720) {
        const detailComponent = document.querySelector(".details-container");
        const closeButton = document.querySelector(".close");
        const overlay = document.querySelector(".overlay");
        detailComponent.classList.add("slide-up");
        closeButton.style.visibility = "visible";
        overlay.style.visibility = "visible";
      }
    });

    const button = document.createElement("button");
    const { timeStatusWrapper, time, state } = {
      timeStatusWrapper: document.createElement("div"),
      time: document.createElement("p"),
      state: document.createElement("p"),
    };
    newList.className = "container";
    timeStatusWrapper.className = "time-status-wrapper";
    time.className = "time";
    state.className = "state";

    fitTimeTemplate(time, res.timeReserved);
    printReservationStatus(state, res.status);
    printReservationStatus(button, res.status);

    const { detailsWrapper, reservationNames, personNum, menuInfo } = {
      detailsWrapper: document.createElement("div"),
      reservationNames: document.createElement("p"),
      personNum: document.createElement("p"),
      menuInfo: document.createElement("p"),
    };
    detailsWrapper.className = "details-wrapper";
    reservationNames.className = "reservation-names";
    personNum.className = "persons-num";
    menuInfo.className = "menu-info";
    reservationNames.innerHTML = `${res.customer.name} - ${res.tables
      .map((table) => `${table.name}`)
      .join(", ")}`;
    personNum.innerHTML = `성인 ${String(res.customer.adult).padStart(2, "0")}
      아이 ${String(res.customer.child).padStart(2, "0")}`;

    const menuList = res.menus.map((menu) => `${menu.name}(${menu.qty})`);
    menuInfo.innerHTML = menuList.join(", ");

    const wholeMenuList = document.createElement("p");
    wholeMenuList.className = "whole-menu-list";
    menuList.forEach((text) => {
      const container = document.createElement("p");
      container.innerHTML = text;
      container.className = "menu-elenemt";
      wholeMenuList.appendChild(container);
    });
    menuInfo.appendChild(wholeMenuList);
    menuInfo.addEventListener("click", (e) => {
      e.stopPropagation();
      if (wholeMenuList.style.display === "flex")
        wholeMenuList.style.display = "none";
      else {
        wholeMenuList.style.display = "flex";
        const toolTipOverlay = document.createElement("div");
        toolTipOverlay.addEventListener("click", () => {
          wholeMenuList.style.display = "none";
          toolTipOverlay.remove();
        });

        toolTipOverlay.className = "whole-menu-list-overlay";
        document.querySelector("#app").appendChild(toolTipOverlay);
      }
    });

    appendChildLoop(detailsWrapper, [reservationNames, personNum, menuInfo]);
    appendChildLoop(timeStatusWrapper, [time, state]);
    appendChildLoop(newList, [timeStatusWrapper, detailsWrapper, button]);

    cardsWrapper.appendChild(newList);
    button.addEventListener("click", (e) => {
      if (window.innerWidth <= 720) e.stopPropagation();
      if (res.status === "reserved") {
        res.status = "seated";
        button.innerHTML = "착석 중";
        button.className = "seated";
      } else if (res.status === "seated") {
        res.status = "done";
        button.innerHTML = "퇴석";
      } else if (res.status === "done") {
        e.stopPropagation();
        newList.remove();
        handler(response[i + 1]);
        Details();
      }
      printReservationStatus(state, res.status);
    });
  });
}

export default Card;
