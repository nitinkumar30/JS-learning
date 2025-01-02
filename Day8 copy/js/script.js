// function doSomething(e){
//     var test = document.getElementById("test");
//     test.innerHTML = e.ctrlKey;

// }

// ----------------------- HOW TO USE CLIENTX AND CLIENTY ----------------------
// function doSomething(event){
//     var e = event || window.event;
//     var test = document.getElementById("test");
//     test.innerHTML = e;

//     var tooltip = document.getElementById("tooltip");
//     tooltip.style.display = "block";
//     tooltip.style.left = e.clientX + "px";
//     tooltip.style.right = e.clientY + "px";

// }

// ------------------------------------------------------------------------------

// window.onload = function(){
//     var result = document.getElementById("result");
//     result.onmousemove = doSomething;
// };

// Options :

// altKey, ctrlKey, shiftKey
// button 
// clientX, clientY
// keyCode
// EventTarget.tagName


// -----------------------------------------------------------------/


// Preventing browser default action 

// window.onload = function(){
//     var email = document.getElementById("email");
//     var submitFormButton = document.querySelector("#newsletter input[type='submit']");

//     submitFormButton.onclick = function(e){
//       e.preventDefault();  

//     var newsletter = document.getElementById("newsletter");
//     var test = document.getElementById("test");
//     if (email.value === "nitin@gmail.com")
//         newsletter.submit();
//     else
//         test.innerHTML = "Invalid mail ID !!";
//         test.style.color = "red";

//     };
// };

// -------------------------------------------------------------------

// jump to the top of website 

window.onload = function(){
    var toTopButton = document.getElementById("toTopButton");

    window.onscroll = function(){
        var test = document.getElementById("test");
        test.innerHTML = window.pageYOffset;
    };

    toTopButton.onclick = function(){
        // window.scrollBy(0, -100);
        window.scrollBy(0, -1 * window.pageYOffset);
    }
}

