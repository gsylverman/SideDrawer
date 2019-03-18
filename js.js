// const sidedrawer=document.getElementsByClassName("sidedrawer")[0];
// const btn=document.getElementById("bt");
// let daNU=false;
// const backdrop=document.getElementsByClassName("backdrop")[0];

// backdrop.style.display="none";
// const showHide=()=>{
//     if(!daNU){
//         sidedrawer.classList.add("show");
//         daNU=true;
//         arataBackDrop()
    
//     }else{
//         sidedrawer.classList.remove("show");
//         daNU=false;
//         arataBackDrop()
        
//     }
    
// };
// const arataBackDrop=()=>{
//     if(daNU){
//         backdrop.style.display="block";
//     }else{
//         backdrop.style.display="none";
//     }
// };
// backdrop.addEventListener("click",()=>{
//     daNU=true;
//     showHide();
// });

// btn.addEventListener("click",showHide);

//AFTER BABEL

var sidedrawer = document.getElementsByClassName("sidedrawer")[0];
var btn = document.getElementById("bt");
var daNU = false;
var backdrop = document.getElementsByClassName("backdrop")[0];
backdrop.style.display = "none";

var showHide = function showHide() {
  if (!daNU) {
    sidedrawer.classList.add("show");
    daNU = true;
    arataBackDrop();
  } else {
    sidedrawer.classList.remove("show");
    daNU = false;
    arataBackDrop();
  }
};

var arataBackDrop = function arataBackDrop() {
  if (daNU) {
    backdrop.style.display = "block";
  } else {
    backdrop.style.display = "none";
  }
};

backdrop.addEventListener("click", function () {
  daNU = true;
  showHide();
});
btn.addEventListener("click", showHide);