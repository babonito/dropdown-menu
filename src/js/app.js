import  * as mFunctions from "./modules/functions.js";

mFunctions.isWebp();

let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function() {
    navigation.classList.toggle('active');
}