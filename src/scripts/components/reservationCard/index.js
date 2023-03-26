import getReservationList from "../../api/index";

async function Card() {
  const response = await getReservationList();
  const cardWrapper = document.querySelector(".cards-wrapper");
  response.forEach((element) => {
    console.log("element :", element);
    // cardWrapper.createElement("li");
  });
  const time = document.querySelector(".time");
  const state = document.querySelector(".state");
  console.log("time :", time);
  time.innerHTML = response[0].timeReserved;
  state.innerHTML = response[0].status;
}

export default Card();
