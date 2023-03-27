import printOutReservationStatus from "../../utils/printOutReservationStatus";

async function Card(response) {
  const cardsWrapper = document.querySelector(".cards-wrapper");

  response
    .filter((res) => res.status !== "done")
    .forEach((res) => {
      const newList = document.createElement("li");
      const wrapperDiv = document.createElement("div");
      const time = document.createElement("p");
      const state = document.createElement("p");
      const button = document.createElement("button");

      newList.className = "container";
      time.className = "time";
      state.className = "state";
      time.innerHTML = res.timeReserved;
      printOutReservationStatus(state, res.status);
      printOutReservationStatus(button, res.status);

      wrapperDiv.appendChild(time);
      wrapperDiv.appendChild(state);
      newList.appendChild(wrapperDiv);
      newList.appendChild(button);

      cardsWrapper.appendChild(newList);
      button.addEventListener("click", () => {
        if (res.status === "reserved") {
          res.status = "seated";
          button.innerHTML = "착석 중";
          button.className = "seated";
        } else if (res.status === "seated") {
          res.status = "done";
          button.innerHTML = "퇴석";
        } else if (res.status === "done") {
          newList.remove();
        }
        printOutReservationStatus(state, res.status);
      });
    });
}

export default Card;
