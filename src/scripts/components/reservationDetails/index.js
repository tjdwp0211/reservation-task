async function Details(response) {
  const test = document.querySelectorAll(".grid-area");

  const reservationInfo = test[0].querySelectorAll("dd");
  const clientInfo = test[1].querySelectorAll("dd");
  const requestedTerm = test[2].querySelectorAll("dd");

  console.log(response, clientInfo, requestedTerm);

  reservationInfo.forEach((el, i) => {
    const element = el;
    if (i === 0) element.innerHTML = "상태";
    else if (i === 1) element.innerHTML = "시간";
    else if (i === 2) element.innerHTML = "접수 시간";
  });
}

export default Details;
