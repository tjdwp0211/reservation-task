const printOutReservationStatus = (el, status) => {
  const element = el;
  if (status === "reserved") {
    element.innerHTML = "예약";
    element.className = "reserved";
  } else if (status === "seated") {
    element.innerHTML = "착석 중";
    element.className = "seated";
  } else if (status === "done") {
    element.innerHTML = "퇴석";
  }
};

export default printOutReservationStatus;
