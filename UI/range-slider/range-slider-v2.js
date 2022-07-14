var inputLeft = document.getElementById("input-left")
// let inputLeft = document.querySelector('#input-left')
let inputRight = document.getElementById("input-right")

var thumbLeft = document.querySelector(".slider > .thumb.left")
var thumbRight = document.querySelector(".slider > .thumb.right")
var range = document.querySelector(".slider > .range")
var track = document.querySelector(".slider > .track")

let leftVal = parseInt(inputLeft.value);
let rightVal = parseInt(inputRight.value);

function setValue() {
   leftVal = parseInt(inputLeft.value);
   rightVal = parseInt(inputRight.value);
   if (leftVal > rightVal -1000){
      inputRight.value = leftVal +1000;
      // setRightValue();
      if(rightVal == inputRight.max) {
         inputLeft.value = parseInt(inputRight.max) - 1000;
      }
   }
   if(rightVal < leftVal + 1000){
      inputLeft.value = rightVal - 1000;
      if(leftVal == inputLeft.min){
         inputRight.value =leftVal + 1000;
      }
   }

   var _this_l = inputLeft,
       min_l = parseInt(_this_l.min),
       max_l = parseInt(_this_l.max);
   var _this_r = inputRight,
       min_r = parseInt(_this_r.min),
       max_r = parseInt(_this_r.max);

   _this_l.value = Math.min(parseInt(_this_l.value), parseInt(inputRight.value)-1)

   var percent_l = ((_this_l.value - min_l) / (max_l - min_l)) * 100;
   thumbLeft.style.left = percent_l + "%";
   range.style.left = percent_l + "%";
   //=====================================

   _this_r.value = Math.max(parseInt(_this_r.value), parseInt(inputLeft.value)+1)

   var percent_r = ((_this_r.value - min_r) / (max_r - min_r)) * 100;
   thumbRight.style.right =(100 - percent_r)  + "%";
   range.style.right = (100 - percent_r) + "%";
}
setValue();


inputLeft.addEventListener("input", setValue)
inputRight.addEventListener("input", setValue)

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