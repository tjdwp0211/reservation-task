function ToolTip(element, texts) {
  const wholeMenuList = document.createElement("p");
  wholeMenuList.className = "whole-menu-list";

  texts.forEach((text) => {
    const container = document.createElement("p");
    container.innerHTML = text;
    container.className = "menu-elenemt";
    wholeMenuList.appendChild(container);
  });

  element.appendChild(wholeMenuList);

  element.addEventListener("click", (e) => {
    e.stopPropagation();
    if (wholeMenuList.style.display === "flex") {
      wholeMenuList.style.display = "none";
    } else {
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
}
export default ToolTip;
