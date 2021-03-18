const nav = document.querySelector("#main");
const navTop = nav.offsetTop;

window.addEventListener("scroll", toFixed);

function toFixed() {
  if (window.scrollY >= navTop) {
    document.body.classList.add("tofixed");
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  } else {
    document.body.classList.remove("tofixed");
    document.body.style.paddingTop = 0;
  }
}
