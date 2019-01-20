var herotitle = {
  origin: "bottom",
  distance: "64px",
  duration: 900,
  delay: 500,
  scale: 1,
}

var cover = {
  origin: "bottom",
  distance: "0px",
  duration: 600,
  delay: 0,
  opacity: 0,
}

var sectitle = {
  origin: "bottom",
  distance: "64px",
  duration: 900,
  delay: 100,
  scale: 1,
}

var qanda = {
  origin: "bottom",
  distance: "64px",
  duration: 900,
  delay: 0,
  scale: 0.98,
  viewFactor: 0.9,
}

var second_page_img = {
  origin: "right",
  distance: "2000px",
  opacity: 1,
  duration: 900,
  delay: 500,
  scale: 1,
  viewFactor: 0,
}

var projects = {
  origin: "bottom",
  distance: "64px",
  duration: 900,
  delay: 0,
  scale: 0.9,
  viewFactor: 0.2,
}

var contact = {
  origin: "bottom",
  distance: "64px",
  duration: 900,
  delay: 0,
  scale: 1,
}

var arrow = {
  origin: "bottom",
  distance: "64px",
  duration: 900,
  delay: 1200,
  scale: 1,
  beforeReveal: function () {
    // $(".freccia").css("opacity","0");
    document.getElementsByClassName("freccia")[0].style.opacity = "0";
  },
  afterReveal: function () {
    document.getElementsByClassName("freccia")[0].style.animation = "freccia 1.6s ease-in-out 5";
    document.getElementsByClassName("freccia")[0].style.opacity = "0";
    // $(".freccia").css({"animation":"freccia 1.6s ease-in-out 5"});
    // $(".freccia").css("opacity","0");
  },
}

var footer = {
  origin: "bottom",
  distance: "20px",
  duration: 900,
  delay: 0,
  scale: 1,
}

var cover = {
  origin: "top",
  distance: "0",
  duration: 1200,
  delay: 0,
  scale: 1.1,
}

var text = {
  origin: "bottom",
  distance: "64px",
  duration: 900,
  delay: 0,
  scale: 1,
}

var imagem = {
  origin: "bottom",
  distance: "64px",
  duration: 900,
  delay: 0,
  scale: 0.98,
  viewFactor: 0.2,
}