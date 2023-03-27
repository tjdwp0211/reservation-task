function fitTimeTemplate(el, time) {
  const element = el;
  const date = new Date(time);

  element.innerHTML = `${String(date.getHours()).padStart(2, "0")} : ${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
}

export default fitTimeTemplate;
