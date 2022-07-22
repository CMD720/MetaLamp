let dropdownOnOff = false;

let dropDownDopComfortMenu = document.querySelector(".dropdown-dop-comfort-menu");
let arrowDopComfort = document.querySelector(".arrow-dop-comfort");

function dropDownDopComfortOnOff() {
    if (dropdownOnOff) {
        dropDownDopComfortMenu.style.display = "none";
        arrowDopComfort.style.transform = "rotate(45deg)"
        dropdownOnOff = false;
    } else {
        dropDownDopComfortMenu.style.display = "block";
        arrowDopComfort.style.transform = "rotate(225deg)"
        dropdownOnOff = true;
    }
}

