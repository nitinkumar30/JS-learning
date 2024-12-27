// var result = document.getElementById("result");

// // result.onmouseover = function() {
// //     alert("test");
// // };

// function sample(arg){
//     alert(arg + "This is sample !!");
// }
// // result.onmouseover = sample("Another sample...");

// result.onmouseover = function() {
//     sample("Sample test...");
// };

// ---------------------------------------------------------

// Events 

// function changeColor(){
//     // this.style.color = "red";
//     this.className = "changeColor";
// }
// function changeColorOut(){
//     // this.style.color = "green";
//     this.removeAttribute("class");
// }

// window.onload = function()
// {
//     var result = document.getElementById("result");

//     result.onmouseover = changeColor;
//     result.onmouseout = changeColorOut;
// }


// ----------------------------------------------------------

// Adding or removing event listener 

function changeColor(){
    // this.style.color = "red";
    this.className = "changeColor";
}
function changeColorOut(){
    // this.style.color = "green";
    this.removeAttribute("class");
}
function increaseFontSize(){
    alert("font increased !!");
}

window.onload = function()
{
    var result = document.getElementById("result");

    // result.onmouseover = changeColor;
    // result.onmouseout = changeColorOut;

    result.addEventListener("mouseover", changeColor);
    result.addEventListener("onmouseout", changeColorOut);
    result.addEventListener("mouseover", increaseFontSize);

}







