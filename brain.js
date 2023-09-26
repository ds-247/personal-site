function loadCSS(filename) {
  var link = document.createElement("link");
  link.href = filename;
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}

console.log(window.innerWidth, "width");

if (window.innerWidth <= 500) {
  loadCSS("./style/mobile-styles.css");
} else {
  loadCSS("./style/style.css");
}
