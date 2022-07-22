let dropdownOnOff = false;

let dropDownComfortMenu = document.querySelector(".dropdown-comfort-menu");
let borderDropdownComfort = document.querySelector(".dropdown-comfort");

let bedroomsBorder = document.querySelector(".minus-bedrooms");
let bedsBorder = document.querySelector(".minus-beds");
let bathroomsBorder = document.querySelector(".minus-bathrooms");

let comfortText = document.getElementsByClassName("dropdown-comfort-text")[0];
let bedrooms = document.getElementsByClassName("bedrooms")[0];
let beds = document.getElementsByClassName("beds")[0];
let bathrooms = document.getElementsByClassName("bathrooms")[0];
let bedroomsCount = 0;
let bedsCount = 0;
let bathroomsCount = 0;
let checkComfort = false;

// temporary plug
const bedroomsOutput = ['спальня', 'спальни', 'спальни', 'спальни', 'спален', 'спален', 'спален', 'спален', 'спален', 'спален']
const bedsOutput = ['кровать', 'кровати', 'кровати', 'кровати', 'кроватей', 'кроватей', 'кроватей', 'кроватей', 'кроватей', 'кроватей']
const bathroomsOutput = ['ванная', 'ванные', 'ванные', 'ванные', 'ванных', 'ванных', 'ванных', 'ванных', 'ванных', 'ванных']
let bedroomsString = "";
let bedsString = "";
let bathroomsString = "";

function nullString(){
     bedroomsString = "";
     bedsString = "";
     bathroomsString = "";
}
function comfortSelected() {
    let defaultComfort = "Удобства номера";
    if (checkComfort) {
        if (bedroomsCount !== 0) bedroomsString = bedroomsCount + " " + bedroomsOutput[bedroomsCount - 1];
        if (bedsCount !== 0) bedsString = ", " + bedsCount + " " + bedsOutput[bedsCount - 1];
        if (bathroomsCount !== 0) bathroomsString = ", " + bathroomsCount + " " + bathroomsOutput[bathroomsCount - 1];
        comfortText.innerHTML = bedroomsString + bedsString + bathroomsString;
    } else {
        comfortText.innerHTML = defaultComfort;
    }
}
comfortSelected();

function dropDownComfortOnOff() {
    if (dropdownOnOff) {
        dropDownComfortMenu.style.display = "none";
        borderDropdownComfort.classList.remove("dropdown-comfort-border-on");
        borderDropdownComfort.classList.add("dropdown-comfort-border-off");
        dropdownOnOff = false;
    } else {
        dropDownComfortMenu.style.display = "block";
        borderDropdownComfort.classList.remove("dropdown-comfort-border-off");
        borderDropdownComfort.classList.add("dropdown-comfort-border-on");
        dropdownOnOff = true;
    }
}

//----------------dropdown--menu------------------
// comfortOptionsCount
function comfortOptionsCount(bedroomsCount, bedsCount, bathroomsCount) {
    bedrooms.innerHTML = bedroomsCount;
    beds.innerHTML = bedsCount;
    bathrooms.innerHTML = bathroomsCount;
}

comfortOptionsCount(bedroomsCount, bedsCount, bathroomsCount);

// add Option
// to do -- limit the maximum
function addOption(bedroomsMarker, bedsMarker, bathroomsMarker) {
    if (bedroomsMarker) {
        bedroomsCount = bedroomsCount + 1;
        comfortOptionsCount(bedroomsCount, bedsCount, bathroomsCount);
        buttonBorder(bedroomsCount, bedsCount, bathroomsCount);
    } else if (bedsMarker) {
        bedsCount = bedsCount + 1;
        comfortOptionsCount(bedroomsCount, bedsCount, bathroomsCount);
        buttonBorder(bedroomsCount, bedsCount, bathroomsCount);
    } else if (bathroomsMarker) {
        bathroomsCount = bathroomsCount + 1;
        comfortOptionsCount(bedroomsCount, bedsCount, bathroomsCount);
        buttonBorder(bedroomsCount, bedsCount, bathroomsCount);
    } else alert("Что-то пошло не так!!!")
    comfortSelected();
}

// remove Option
function removeOption(bedroomsMarker, bedsMarker, bathroomsMarker) {
    if (bedroomsMarker) {
        if (bedroomsCount === 0) {
            // not work !?
            bedroomsString = "";
            console.log('0 - спален')
        } else {
            bedroomsCount = bedroomsCount - 1;
            comfortOptionsCount(bedroomsCount, bedsCount, bathroomsCount);
            buttonBorder(bedroomsCount, bedsCount, bathroomsCount);
        }
    } else if (bedsMarker) {
        if (bedsCount === 0) {
            bedsString = "";
            console.log('0 - кроватей')
        } else {
            bedsCount = bedsCount - 1;
            comfortOptionsCount(bedroomsCount, bedsCount, bathroomsCount);
            buttonBorder(bedroomsCount, bedsCount, bathroomsCount);
        }
    } else if (bathroomsMarker) {
        if (bathroomsCount === 0) {
            bathroomsString = "";
            console.log('0 - ванных комнат')
            // return;
        } else {
            bathroomsCount = bathroomsCount - 1;
            comfortOptionsCount(bedroomsCount, bedsCount, bathroomsCount);
            buttonBorder(bedroomsCount, bedsCount, bathroomsCount);
        }
    } else alert("Что-то пошло не так!!!")
    console.log(bedroomsCount, " ", bedsCount, " ", bathroomsCount)
    comfortSelected();
}

function buttonBorder(bedroomsCount, bedsCount, bathroomsCount) {
    if (bedroomsCount === 0 && bedsCount === 0 && bathroomsCount === 0) {
        checkComfort = false;
        console.log(checkComfort)
    } else {
        checkComfort = true;
        console.log(checkComfort)
    }
    if (bedroomsCount !== 0) {
        bedroomsBorder.classList.remove('minus-comfort-border-off');
        bedroomsBorder.classList.add('minus-comfort-border-on');
    } else {
        bedroomsBorder.classList.remove('minus-comfort-border-on');
        bedroomsBorder.classList.add('minus-comfort-border-off');
    }
    if (bedsCount !== 0) {
        bedsBorder.classList.remove('minus-comfort-border-off');
        bedsBorder.classList.add('minus-comfort-border-on');
    } else {
        bedsBorder.classList.remove('minus-comfort-border-on');
        bedsBorder.classList.add('minus-comfort-border-off');
    }
    if (bathroomsCount !== 0) {
        bathroomsBorder.classList.remove("minus-comfort-border-off");
        bathroomsBorder.classList.add("minus-comfort-border-on");
    } else {
        bathroomsBorder.classList.remove("minus-comfort-border-on");
        bathroomsBorder.classList.add("minus-comfort-border-off");
    }
}