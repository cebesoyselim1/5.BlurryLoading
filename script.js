let bgImage = document.querySelector(".bg-img");
let bgPerc = document.querySelector(".bg-perc");


let counter = 0;

let efct = () => {
    counter++;
    if(counter >= 100){
        bgPerc.parentElement.removeChild(bgPerc);
        clearInterval(bgInterval);
    }
    increasePercentage();
    changeOpacity();
    changeBrightness();
}

function increasePercentage(){
    bgPerc.innerHTML = `%${counter}`;
}

function changeOpacity(){
    bgPerc.style.opacity = 1 - ((counter) / 100);
}

function changeBrightness(){
    bgImage.style.filter = `brightness(${counter}%)`
}

bgInterval = setInterval(efct,50);