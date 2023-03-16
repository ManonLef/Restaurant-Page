function addFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "© Manon Lef 2023";
  document.querySelector("#content").appendChild(footer);
}

export { addFooter };
