// window.onload = function(){
//     var numberField = document.getElementById("myForm").numberField;
//     var textField = document.getElementById("myForm").textField;
//     var submitMyFormButton = document.getElementById("myForm").submitMyFormButton;
    
//     var info = document.getElementById("info");
//     var i=0;
//     var isEverythingOK = true;

//     function isNumber(valueToCheck){
//         return !isNaN(valueToCheck);
//     }

//     // numberField.onkeydown = function(e){
//     // numberField.onkeyup = function(e){
//     numberField.onkeydown = function(e){
        
//         // info.innerHTML = String.fromCharCode(e.which);
//         // e.preventDefault();

//         if(!isNumber(this.value)){
//         // if(!isNumber(String.fromCharCode(e.which)) && e.which !== 8){
//             info.innerHTML = "Please type a number ...";
//             this.style.backgroundColor = "red";
//             e.preventDefault();
//         }
//         else{
//             info.innerHTML = "";
//             this.style.backgroundColor = "green";
//         }
        
//         // info.innerHTML = ++i;
//     };

// };

// // ---------------------------------------------------------------

// submitMyFormButton.onclick = function(){
//     if (!isEverythingOK)
//         e.preventDefault();
// }

// ------------------------------------------------------------------

// window.onload = function(){
//     var myForm = document.getElementById("myForm");
//     var submitButton = document.getElementById("myForm").submitButton;
//     var info = document.getElementById("info");

//     submitButton.onclick = function(e){
//         var tmpString = "";
//         for(var i = 0; i < myForm.courseName.length; i++){
//             tmpString += myForm.courseName[i].value + " ";
//         }

//         info.innerHTML += tmpString + "<br>";

//         e.preventDefault();
//     };

//     // info.innerHTML = "This is a text";
// };

// ------------------------------------------------------------------

// Radio input example

// window.onload = function(){
//     var myForm = document.getElementById("myForm");
//     var submitButton = document.getElementById("myForm").submitButton;
//     var info = document.getElementById("info");

//     submitButton.onclick = function(e){
//         var tmpString = "";
//         for(var i = 0; i < myForm.courseName.length; i++){
//             tmpString += myForm.courseName[i].value + " ";
//         }

//         info.innerHTML += tmpString + "<br>";

//         e.preventDefault();
//     };

//     for ( var i = 0; i < myForm.acceptationOfToS.length; i++){
//         myForm.acceptationOfToS[i].onclick = function(){
//             // alert(this.value === "true");
//             submitButton.disabled = false;
//         };
//     }

    // myForm.acceptationOfToS[0].onclick = function(){
    //     submitButton.disabled = false;
    // };
    // myForm.acceptationOfToS[1].onclick = function(){
    //     submitButton.disabled = true;
    // };



    // info.innerHTML = "This is a text";
// };


// -----------------------------------------------------------------

// Select

// window.onload = function(){
//     var myForm = document.getElementById("myForm");
//     var info = document.getElementById("info");
//     var videoCourses = myForm.videoCourses;

//     videoCourses.onchange = function(){
//         // info.innerHTML = videoCourses.options[videoCourses.selectedIndex].value;
//         info.innerHTML += this.value + " | ";
//         // alert(videoCourses.selectedIndex);
//     }
// };

// -------------------------------------------------------------------

// String methods 

window.onload = function(){
    var info = document.getElementById("info");
    var tmp = "A text about nothing";
    var link = "https://dev.to/nitinkumar30/journey-in-vapt-self-training-58k3"
    // var location = window.location + " "
    var tmpString = " XHTML PHP COMPASS SASS GRUNT.JS ";


    // info.innerHTML = tmp.charAt(0) + tmp.substring(1, 4);

    // info.innerHTML = link.substring(link.lastIndexOf("/"));

    var tmpArray = tmpString.split(" ");
    // info.innerHTML = tmpArray[0];

    // info.innerHTML = tmpString.split(" ")[1];

    var newString = tmpArray.join(", ");
    // info.innerHTML = tmpString;

    var tmpLongString = 'I\'m a very good programmer who wrote very long text should be divided into many lines in a \
                        code so that the code is easier to read...';


    info.innerHTML = tmpLongString;
};

