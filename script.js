const collapsibleButtons = document.getElementsByClassName("collabse-title");
for (let i = 0; i < collapsibleButtons.length; i++) {
  collapsibleButtons[i].addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "flex";
    for (let j = 0; j < collapsibleButtons.length; j++) {
      if (j !== i) {
        const otherContent = collapsibleButtons[j].nextElementSibling;
        otherContent.style.display = "none";
      }
    }
  });
}
