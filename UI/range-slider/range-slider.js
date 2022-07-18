let inputLeft = document.getElementById("input-left")
let inputRight = document.getElementById("input-right")

let thumbLeft = document.querySelector(".slider > .thumb.left")
let thumbRight = document.querySelector(".slider > .thumb.right")
let range = document.querySelector(".slider > .range")
let track = document.querySelector(".slider > .track")

function setLeftValue() {
    let _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value)-1)

    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
    let _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value)+1)

    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbRight.style.right =(100 - percent)  + "%";
    range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue)
inputRight.addEventListener("input", setRightValue)

// ------output value------
function getValues(){
    let valueLeft = parseInt(inputLeft.value)
    let valueRight = parseInt(inputRight.value)
    let displayElement = document.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML =  valueLeft + "&#8381 - " + valueRight + "&#8381";
}
getValues();

function outputValues(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("multi-rage-slider");
    for( let x = 0; x < sliderSections.length; x++ ){
        let sliders = sliderSections[x].getElementsByTagName("input");
        for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
                sliders[y].oninput = getValues;
            }
        }
    }
}
// ------hover------
inputLeft.addEventListener("mouseover", function(){
    thumbLeft.classList.add("hover");
    track.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function(){
    thumbLeft.classList.remove("hover");
    track.classList.remove("hover");
});
inputRight.addEventListener("mouseover", function(){
    thumbRight.classList.add("hover");
    track.classList.add("hover");
});
inputRight.addEventListener("mouseout", function(){
    thumbRight.classList.remove("hover");
    track.classList.remove("hover");
});

// ------active------
inputLeft.addEventListener("mousedown", function(){
    thumbLeft.classList.add("active");
    outputValues();
});
inputLeft.addEventListener("mouseup", function(){
    thumbLeft.classList.remove("active");
});
inputRight.addEventListener("mousedown", function(){
    thumbRight.classList.add("active");
    outputValues();
});
inputRight.addEventListener("mouseup", function(){
    thumbRight.classList.remove("active");
});


