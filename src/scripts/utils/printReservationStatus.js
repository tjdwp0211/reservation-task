function printOutReservationStatus(el, status) {
  if (status === "reserved") {
    el.innerHTML = "예약";
    el.className = "reserved";
  } else if (status === "seated") {
    el.innerHTML = "착석 중";
    el.className = "seated";
  } else if (status === "done") {
    el.innerHTML = "퇴석";
  }
}

export default printOutReservationStatus;
