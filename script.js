function nextPage(pageNumber) {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "none";

  document.getElementById("page" + pageNumber).style.display = "block";
}
function startMagic() {
    const items = ["🎈","💖","✨","💐","🎀"];

    for (let i = 0; i < 40; i++) {
        let f = document.createElement("div");
        f.className = "float";
        f.innerText = items[Math.floor(Math.random() * items.length)];

        f.style.left = Math.random() * 100 + "vw";
        f.style.animationDuration = (5 + Math.random() * 5) + "s";

        document.body.appendChild(f);

        // auto remove after animation
        setTimeout(() => {
            f.remove();
        }, 10000);
    }
}
window.onload = function () {
  startMagic();
};

window.onload = function () {
  document.getElementById("page1").style.display = "block";
};
