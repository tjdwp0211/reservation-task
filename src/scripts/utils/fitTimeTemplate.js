function fitTimeTemplate(el, time) {
  const date = new Date(time);

  el.innerHTML = `${String(date.getHours()).padStart(2, "0")} : ${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
}

export default fitTimeTemplate;
