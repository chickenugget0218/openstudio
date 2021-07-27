const body = document.querySelector("body");

const IMG_NUMBER = 7;



function paintIMAGE(imgNumber){
    const image = new Image();
    image.src = `bg/${imgNumber + 1}.JPG`;
    image.classList.add('bgImage');
    body.append(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintIMAGE(randomNumber);
}
 
init();