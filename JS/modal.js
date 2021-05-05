var modal = document.querySelector(".modal");
var modal2 = document.querySelector(".modal2");
var modal3 = document.querySelector(".modal3");
var modal4 = document.querySelector(".modal4");
var modal5 = document.querySelector(".modal5");
var modal6 = document.querySelector(".modal6");
var modal7 = document.querySelector(".modal7");
var modal8 = document.querySelector(".modal8");
//pakai id aja cuy
var trigger = document.querySelector("#g1");
var trigger2 = document.querySelector("#g2");
var trigger3 = document.querySelector("#g3");
var trigger4 = document.querySelector("#g4");
var trigger5 = document.querySelector("#g5");
var trigger6 = document.querySelector("#g6");
var trigger7 = document.querySelector("#g7");
var trigger8 = document.querySelector("#g8");

var closeButton = document.querySelector("#cls");
var closeButton2 = document.querySelector("#cls2");
var closeButton3 = document.querySelector("#cls3");
var closeButton4 = document.querySelector("#cls4");
var closeButton5 = document.querySelector("#cls5");
var closeButton6 = document.querySelector("#cls6");
var closeButton7 = document.querySelector("#cls7");
var closeButton8 = document.querySelector("#cls8");

function toggle() {
    modal.classList.toggle("show-modal");
}
function toggle2() {
    modal2.classList.toggle("show-modal2");
}
function toggle3() {
    modal3.classList.toggle("show-modal3");
}
function toggle4() {
    modal4.classList.toggle("show-modal4");
}
function toggle5() {
    modal5.classList.toggle("show-modal5");
}
function toggle6() {
    modal6.classList.toggle("show-modal6");
}
function toggle7() {
    modal7.classList.toggle("show-modal7");
}
function toggle8() {
    modal8.classList.toggle("show-modal8");
}
function windowOnClick(event) {
   if (event.target == modal) {
       toggle();
   }
   else if(event.target ==modal2){
       toggle2();
   }
   else if(event.target ==modal3){
       toggle3();
   }
   else if(event.target ==modal4){
       toggle4();
    }
    else if(event.target ==modal5){
    toggle5();
    }
    else if(event.target ==modal6){
    toggle6();
    }
    else if(event.target ==modal7){
    toggle7();
    }
    else if(event.target ==modal8){
    toggle8();
    }
}

trigger.addEventListener("click", toggle);
closeButton.addEventListener("click", toggle); 

trigger2.addEventListener("click", toggle2);
closeButton2.addEventListener("click", toggle2);

trigger3.addEventListener("click", toggle3);
closeButton3.addEventListener("click", toggle3); 

trigger4.addEventListener("click", toggle4);
closeButton4.addEventListener("click", toggle4);

trigger5.addEventListener("click", toggle5);
closeButton5.addEventListener("click", toggle5); 

trigger6.addEventListener("click", toggle6);
closeButton6.addEventListener("click", toggle6);

trigger7.addEventListener("click", toggle7);
closeButton7.addEventListener("click", toggle7); 

trigger8.addEventListener("click", toggle8);
closeButton8.addEventListener("click", toggle8);

window.addEventListener("click", windowOnClick);
