/* ******variables****** */
const toggleMobileNav = document.getElementById("mobile-nav-toggle");
const headerEl = document.querySelector("header");
/* ******functions****** */

/* ******event listeners****** */
toggleMobileNav.addEventListener("click", () => {
  if (toggleMobileNav.classList.contains("icon-hamburger")) {
    // change icon
    toggleMobileNav.innerHTML = `
      <path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fill-rule="evenodd"/>
  `;
    toggleMobileNav.setAttribute("width", "20");
    toggleMobileNav.setAttribute("height", "20");
    toggleMobileNav.classList.remove("icon-hamburger");
    toggleMobileNav.classList.add("icon-close");
    // display mobile navigation links
    headerEl.classList.add("nav-expanded");
    // disable scrolling
    document.body.classList.add("scroll");
  } else {
    // change icon
    toggleMobileNav.innerHTML = `
      <g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g>
      `;
    toggleMobileNav.setAttribute("width", "24");
    toggleMobileNav.setAttribute("height", "16");
    toggleMobileNav.classList.remove("icon-close");
    toggleMobileNav.classList.add("icon-hamburger");
    // hide mobile navigation links
    headerEl.classList.remove("nav-expanded");
    // enable scrolling
    document.body.classList.remove("scroll");
  }
});

let success = 1000000;

while(!success){
  tryAgain();
}
