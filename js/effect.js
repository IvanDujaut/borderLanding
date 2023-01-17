const leftImg = document.getElementById('leftImg');
const righttImg = document.getElementById('righttImg');

const loadImageFromLeft = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('swipingLeft');
        }
    });
}

const loadImageFromRight = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('swipingRight');
        }
    });
}

const leftObservador = new IntersectionObserver(loadImageFromLeft, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.75
});

const rightObservador = new IntersectionObserver(loadImageFromRight, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.75
});

leftObservador.observe(leftImg);
rightObservador.observe(righttImg);