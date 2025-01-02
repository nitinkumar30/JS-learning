// function movingImage(e, objToMove){
    
//     objToMove.style.left = e.clientX - objToMove.width / 2 + "px";
//     objToMove.style.top = e.clientY - objToMove.height / 2 + "px";
// }

// window.onload = function(){

//     var sample = document.getElementById("sample");

//     sample.onmousedown = function(){
        
//         var self = this;
//         this.onmousemove = function(e){
//             movingImage(e, self);
//         };
//     };
    
//     sample.onmouseup = function(){
//         sample.onmousemove = null;
//     };

//     sample.ondragstart = function(e){
//         e.preventDefault();
//     };
// }

// ---------------------------------------------------------------

// setTimeOut & setInterval functions 

window.onload = function(){
    var buttonStart = document.getElementById("buttonStart");
    var buttonStop = document.getElementById("buttonStop");
    
    var stopWatchHandler = document.getElementById("stopWatchHandler");
    var intervalRefId;
    
    buttonStart.onclick = function(){

        if (intervalRefId)
            clearInterval(intervalRefId);
        var startingValue = document.getElementById("startingValue").value;
        stopWatchHandler.innerHTML = startingValue;

        var intervalRefId = setInterval(function(){

            if(startingValue < 1){
                clearInterval(intervalRefId);
                return;
            }
            stopWatchHandler.innerHTML = --startingValue;
        }, 1000);
    };

    buttonStop.onclick = function(){
        clearInterval(intervalRefId);
    };

};

