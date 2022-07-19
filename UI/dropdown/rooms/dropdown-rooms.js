let dropdownOnOff = false;

let dropDownMenu = document.querySelector(".dropdown-menu");
let borderDropdown = document.querySelector(".dropdown");

let adultBorder = document.querySelector(".minus-adult");
let childrenBorder = document.querySelector(".minus-children");
let babiesBorder = document.querySelector(".minus-babies");
let clearVisible = document.querySelector(".clear")

let guest = document.getElementsByClassName("dropdown-text")[0];
let adult = document.getElementsByClassName("adult")[0];
let children = document.getElementsByClassName("children")[0];
let babies = document.getElementsByClassName("babies")[0];
let adultCount = 0;
let childrenCount = 0;
let babiesCount = 0;
let checkGuest = false;

function guestCount(){
    let defaultGuest = "Количество комнат";
    let resultGuest = adultCount + childrenCount;


    if(checkGuest){
        if(babiesCount!=0){
            guest.innerHTML = resultGuest + " гостя, " + babiesCount + " младенец";
        }else {guest.innerHTML = resultGuest + " гостя";}
        // some actions
    }else{
        guest.innerHTML = defaultGuest;
    }
}
guestCount();

function dropDownOnOff(){

    if(dropdownOnOff){
        dropDownMenu.style.display = "none";
        // dropDownMenu.style.transform = "translateY(-3em)"
        borderDropdown.style.border = "1px solid var(--Dark_Shade_25)";
        borderDropdown.style.borderRadius = "4px";
        dropdownOnOff = false;
    }else{
        dropDownMenu.style.display = "block";
        borderDropdown.style.border = "1px solid var(--Dark_Shade_50)";
        borderDropdown.style.borderRadius = "0";
        borderDropdown.style.borderTopLeftRadius = "4px";
        borderDropdown.style.borderTopRightRadius = "4px";
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
        if(adultCount==0){
            // return;
        }else{
                adultCount = adultCount - 1;
                guestOptions(adultCount ,childrenCount ,babiesCount);
                buttonBorder(adultCount ,childrenCount ,babiesCount);
             }
    }else if(childrenMarker){
        if(childrenCount==0){
            // return;
        }else{
                childrenCount = childrenCount - 1;
                guestOptions(adultCount ,childrenCount ,babiesCount);
                buttonBorder(adultCount ,childrenCount ,babiesCount);
        }
    }else if(babiesMarker){
        if(babiesCount==0){
            // return;
        }else{
                babiesCount = babiesCount - 1;
                guestOptions(adultCount ,childrenCount ,babiesCount);
                buttonBorder(adultCount ,childrenCount ,babiesCount);
        }
    }else alert("Что-то пошло не так!!!")
}

function buttonBorder(adultCount ,childrenCount ,babiesCount) {
    if(adultCount==0 && childrenCount==0 && babiesCount==0){
        clearVisible.style.opacity = "0";
        checkGuest = false;
    }else {
            clearVisible.style.opacity = "1";
            checkGuest = true;
          }

    if (adultCount !=0){
        adultBorder.classList.remove('minus-border-off');
        adultBorder.classList.add('minus-border-on');
    }else{
        adultBorder.classList.remove('minus-border-on');
        adultBorder.classList.add('minus-border-off');
    }
    if (childrenCount !=0){
        childrenBorder.classList.remove('minus-border-off');
        childrenBorder.classList.add('minus-border-on');
    }else{
        childrenBorder.classList.remove('minus-border-on');
        childrenBorder.classList.add('minus-border-off');
    }
    if (babiesCount !=0){
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
    guestOptions(adultCount ,childrenCount ,babiesCount);
    buttonBorder(adultCount ,childrenCount ,babiesCount);
    guestCount();
}