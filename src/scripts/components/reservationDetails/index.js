import getReservationList from "../../api";

async function Details() {
  const response = await getReservationList();
  const test = document.querySelectorAll(".grid-area");

  const reservationInfo = test[0].querySelectorAll("dd");
  const clientInfo = test[1].querySelectorAll("dd");
  const requestedTerm = test[2].querySelectorAll("dd");

  console.log("test :", test);
  console.log("response :", response);
  console.log("clientInfo :", clientInfo);
  console.log("reservationInfo :", reservationInfo);
  console.log("requestedTerm :", requestedTerm);

  reservationInfo.forEach((el, i) => {
    const element = el;
    if (i === 0) element.innerHTML = "상태";
    if (i === 1) element.innerHTML = "시간";
    if (i === 2) element.innerHTML = "접수 시간";
  });
}

export default Details();
