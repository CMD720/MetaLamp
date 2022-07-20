let dropdownOnOff = false;

let dropDownComfortMenu = document.querySelector(".dropdown-comfort-menu");
let borderDropdownComfort = document.querySelector(".dropdown-comfort");

let bedroomsBorder = document.querySelector(".minus-bedrooms");
let bedsBorder = document.querySelector(".minus-beds");
let bathroomsBorder = document.querySelector(".minus-bathrooms");
let clearVisible = document.querySelector(".clear-guest")

let comfortText = document.getElementsByClassName("dropdown-comfort-text")[0];
let bedrooms = document.getElementsByClassName("bedrooms")[0];
let beds = document.getElementsByClassName("beds")[0];
let bathrooms = document.getElementsByClassName("bathrooms")[0];
let bedroomsCount = 0;
let bedsCount = 0;
let bathroomsCount = 0;
let checkGuest = false;

// comfort
// comfortText
// bedrooms
// beds
// bathrooms
// comfortSelected
function comfortSelected(){
    let defaultGuest = "Удобства номера";
    if(checkGuest){
        if(bathroomsCount!=0){
            comfortText.innerHTML = resultGuest + " гостя, " + bathroomsCount + " младенец";
        }else {comfortText.innerHTML = resultGuest + " гостя";}
        // some actions
    }else{
        comfortText.innerHTML = defaultGuest;
    }
}
comfortSelected();

function dropDownComfortOnOff(){
// to-do change "style"  on "classList"
    if(dropdownOnOff){
        dropDownComfortMenu.style.display = "none";
        borderDropdownComfort.style.border = "1px solid var(--Dark_Shade_25)";
        borderDropdownComfort.style.borderRadius = "4px";
        dropdownOnOff = false;
    }else{
        dropDownComfortMenu.style.display = "block";
        borderDropdownComfort.style.border = "1px solid var(--Dark_Shade_50)";
        borderDropdownComfort.style.borderRadius = "0";
        borderDropdownComfort.style.borderTopLeftRadius = "4px";
        borderDropdownComfort.style.borderTopRightRadius = "4px";
        dropdownOnOff = true;
    }
}
//----------------dropdown--menu------------------
// comfortOptionsCount
function comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount) {
    bedrooms.innerHTML = bedroomsCount;
    beds.innerHTML = bedsCount;
    bathrooms.innerHTML = bathroomsCount;
}
comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount);
// addOption
function addOption(bedroomsMarker ,bedsMarker ,bathroomsMarker) {
    if(bedroomsMarker){
        bedroomsCount = bedroomsCount + 1;
        comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount);
        buttonBorder(bedroomsCount ,bedsCount ,bathroomsCount);
    }else if(bedsMarker){
        bedsCount = bedsCount + 1;
        comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount);
        buttonBorder(bedroomsCount ,bedsCount ,bathroomsCount);
    }else if(bathroomsMarker){
        bathroomsCount = bathroomsCount + 1;
        comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount);
        buttonBorder(bedroomsCount ,bedsCount ,bathroomsCount);
    }else alert("Что-то пошло не так!!!")
}
function removeOption(bedroomsMarker ,bedsMarker ,bathroomsMarker) {
    if(bedroomsMarker){
        if(bedroomsCount==0){
            // return;
        }else{
            bedroomsCount = bedroomsCount - 1;
            comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount);
            buttonBorder(bedroomsCount ,bedsCount ,bathroomsCount);
        }
    }else if(bedsMarker){
        if(bedsCount==0){
            // return;
        }else{
            bedsCount = bedsCount - 1;
            comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount);
            buttonBorder(bedroomsCount ,bedsCount ,bathroomsCount);
        }
    }else if(bathroomsMarker){
        if(bathroomsCount==0){
            // return;
        }else{
            bathroomsCount = bathroomsCount - 1;
            comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount);
            buttonBorder(bedroomsCount ,bedsCount ,bathroomsCount);
        }
    }else alert("Что-то пошло не так!!!")
}

function buttonBorder(bedroomsCount ,bedsCount ,bathroomsCount) {
    // if(bedroomsCount==0 && bedsCount==0 && bathroomsCount==0){
    //     // clearVisible.style.opacity = "0";
    //     clearVisible.classList.remove('clear-guest-on');
    //     clearVisible.classList.add('clear-guest-off');
    //     checkGuest = false;
    // }else {
    //     // clearVisible.style.opacity = "1";
    //     clearVisible.classList.remove('clear-guest-on');
    //     clearVisible.classList.add('clear-guest-off');
    //     checkGuest = true;
    // }

    if (bedroomsCount !=0){
        bedroomsBorder.classList.remove('minus-comfort-border-off');
        bedroomsBorder.classList.add('minus-comfort-border-on');
    }else{
        bedroomsBorder.classList.remove('minus-comfort-border-on');
        bedroomsBorder.classList.add('minus-comfort-border-off');
    }
    if (bedsCount !=0){
        bedsBorder.classList.remove('minus-comfort-border-off');
        bedsBorder.classList.add('minus-comfort-border-on');
    }else{
        bedsBorder.classList.remove('minus-comfort-border-on');
        bedsBorder.classList.add('minus-comfort-border-off');
    }
    if (bathroomsCount !=0){
        bathroomsBorder.classList.remove("minus-comfort-border-off");
        bathroomsBorder.classList.add("minus-comfort-border-on");
    }else{
        bathroomsBorder.classList.remove("minus-comfort-border-on");
        bathroomsBorder.classList.add("minus-comfort-border-off");
    }
}
// function clearGuests() {
//     bedroomsCount = 0;
//     bedsCount = 0;
//     bathroomsCount = 0;
//     comfortOptionsCount(bedroomsCount ,bedsCount ,bathroomsCount);
//     buttonBorder(bedroomsCount ,bedsCount ,bathroomsCount);
//     comfortSelected();
// }