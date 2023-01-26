const leftImg = document.getElementById("leftImg");
const righttImg = document.getElementById("righttImg");
const fadeIn = document.getElementById("fadeInImg");
const shippingIn = document.getElementById("shippingImg");
const startsIn = document.getElementById("startsImg");
const pulseIn = document.getElementById("pulseImg");
const giftIn = document.getElementById("giftImg");

const loadImageFromLeft = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("swipingLeft");
    }
  });
};

const loadImageFromRight = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("swipingRight");
    }
  });
};

const loadImageFadeIn = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("fadeIn");
    }
  });
};

const loadImageShipping = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("shippingIn");
    }
  });
};

const loadImageStarts = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("startsIn");
    }
  });
};

const loadImagePulse = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("pulseIn");
    }
  });
};

const loadImageGift = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("giftIn");
    }
  });
};

const leftObservador = new IntersectionObserver(loadImageFromLeft, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.75,
});

const rightObservador = new IntersectionObserver(loadImageFromRight, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.75,
});

const fadeInObservador = new IntersectionObserver(loadImageFadeIn, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.75,
});

const shippingIntObservador = new IntersectionObserver(loadImageShipping, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.75,
});

const startsInObservador = new IntersectionObserver(loadImageStarts, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.75,
});

const pulseInObservador = new IntersectionObserver(loadImagePulse, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.75,
});

const giftInObservador = new IntersectionObserver(loadImageGift, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.75,
});

leftObservador.observe(leftImg);
rightObservador.observe(righttImg);
fadeInObservador.observe(fadeIn);

shippingIntObservador.observe(shippingIn);
startsInObservador.observe(startsIn);
pulseInObservador.observe(pulseIn);
giftInObservador.observe(giftIn);

/*Solapa de idiomas*/
var miElemento = document.querySelector(".fade-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset < 30) {
    miElemento.style.transition = "opacity .5s";
    miElemento.style.opacity = "1";
  } else {
    miElemento.style.transition = "opacity .5s";
    miElemento.style.opacity = "0";
  }
});
