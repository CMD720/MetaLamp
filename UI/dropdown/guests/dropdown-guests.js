let dropdownOnOff = false;

let dropDownMenu = document.querySelector(".dropdown-guest-menu");
let borderDropdown = document.querySelector(".dropdown-guest");

let adultBorder = document.querySelector(".minus-adult");
let childrenBorder = document.querySelector(".minus-children");
let babiesBorder = document.querySelector(".minus-babies");
let clearVisible = document.querySelector(".clear-guest")

let guest = document.getElementsByClassName("dropdown-guest-text")[0];
let adult = document.getElementsByClassName("adult")[0];
let children = document.getElementsByClassName("children")[0];
let babies = document.getElementsByClassName("babies")[0];
let adultCount = 0;
let childrenCount = 0;
let babiesCount = 0;
let checkGuest = false;

const guestOutput = ['гость','гостя','гостя','гостя','гостей','гостей','гостей','гостей','гостей','гостей'];
const babiesOutput = ['младенец','младенца','младенца','младенца','младенцев','младенцев','младенцев','младенцев','младенцев','младенцев'];
let guestString = '';
let babiesString = '';

function guestCount(){
    let defaultGuest = "Сколько гостей";
    let resultGuest = adultCount + childrenCount;

    if(checkGuest){
        if(resultGuest!==0) guestString = resultGuest + " " + guestOutput[resultGuest-1];
        if(babiesCount !==0) babiesString =" " + babiesCount + " " + babiesOutput[babiesCount-1];
        guest.innerHTML = guestString + babiesString;
    }else{
        guest.innerHTML = defaultGuest;
    }
}
guestCount();

function dropDownOnOff(){

    if(dropdownOnOff){
        dropDownMenu.style.display = "none";
        borderDropdown.classList.remove("dropdown-guest-border-on")
        borderDropdown.classList.add("dropdown-guest-border-off")
        dropdownOnOff = false;
    }else{
        dropDownMenu.style.display = "block";
        borderDropdown.classList.remove("dropdown-guest-border-off")
        borderDropdown.classList.add("dropdown-guest-border-on")
        dropdownOnOff = true;
    }
}
//----------------dropdown--menu------------------
function guestOptions(adultCount ,childrenCount ,babiesCount) {
    adult.innerHTML = adultCount;
    children.innerHTML = childrenCount;
    babies.innerHTML = babiesCount;
}
guestOptions(adultCount ,childrenCount ,babiesCount);

function addGuest(adultMarker ,childrenMarker ,babiesMarker) {
    if(adultMarker){
        adultCount = adultCount + 1;
        guestOptions(adultCount ,childrenCount ,babiesCount);
        buttonBorder(adultCount ,childrenCount ,babiesCount);
    }else if(childrenMarker){
        childrenCount = childrenCount + 1;
        guestOptions(adultCount ,childrenCount ,babiesCount);
        buttonBorder(adultCount ,childrenCount ,babiesCount);
    }else if(babiesMarker){
        babiesCount = babiesCount + 1;
        guestOptions(adultCount ,childrenCount ,babiesCount);
        buttonBorder(adultCount ,childrenCount ,babiesCount);
    }else alert("Что-то пошло не так!!!")
}
function removeGuest(adultMarker ,childrenMarker ,babiesMarker) {
    if(adultMarker){
        if(adultCount===0){
            // return;
        }else{
                adultCount = adultCount - 1;
                guestOptions(adultCount ,childrenCount ,babiesCount);
                buttonBorder(adultCount ,childrenCount ,babiesCount);
             }
    }else if(childrenMarker){
        if(childrenCount===0){
            // return;
        }else{
                childrenCount = childrenCount - 1;
                guestOptions(adultCount ,childrenCount ,babiesCount);
                buttonBorder(adultCount ,childrenCount ,babiesCount);
        }
    }else if(babiesMarker){
        if(babiesCount===0){
            // return;
        }else{
                babiesCount = babiesCount - 1;
                guestOptions(adultCount ,childrenCount ,babiesCount);
                buttonBorder(adultCount ,childrenCount ,babiesCount);
        }
    }else alert("Что-то пошло не так!!!")
}

function buttonBorder(adultCount ,childrenCount ,babiesCount) {
    if(adultCount===0 && childrenCount===0 && babiesCount===0){
        clearVisible.classList.remove('clear-guest-on');
        clearVisible.classList.add('clear-guest-off');
        checkGuest = false;
    }else {
        clearVisible.classList.remove('clear-guest-off');
        clearVisible.classList.add('clear-guest-on');
        checkGuest = true;
          }

    if (adultCount !==0){
        adultBorder.classList.remove('minus-border-off');
        adultBorder.classList.add('minus-border-on');
    }else{
        adultBorder.classList.remove('minus-border-on');
        adultBorder.classList.add('minus-border-off');
    }
    if (childrenCount !==0){
        childrenBorder.classList.remove('minus-border-off');
        childrenBorder.classList.add('minus-border-on');
    }else{
        childrenBorder.classList.remove('minus-border-on');
        childrenBorder.classList.add('minus-border-off');
    }
    if (babiesCount !==0){
        babiesBorder.classList.remove("minus-border-off");
        babiesBorder.classList.add("minus-border-on");
    }else{
        babiesBorder.classList.remove("minus-border-on");
        babiesBorder.classList.add("minus-border-off");
    }
}
function clearGuests() {
    adultCount = 0;
    childrenCount = 0;
    babiesCount = 0;
    guestString = '';
    babiesString = '';
    guestOptions(adultCount ,childrenCount ,babiesCount);
    buttonBorder(adultCount ,childrenCount ,babiesCount);
    guestCount();
}