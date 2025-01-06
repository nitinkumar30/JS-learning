// window.onload = function(){

    // var info = document.getElementById("info");
    // var sample = document.getElementById("sample");

    // sample.onclick = function(e){

    //     e.preventDefault();

    //     window.location=this.getAttribute("href");
    //     // window.location = this.getAttribute/
    // };

    // info.innerHTML = window.location;

// };


// --------------------------------------------------------/

var i = 2;

function loadMoreImages(){
    // alert("More images loading...");
    if ( i<4){

        var images = document.getElementById("images");
        var image = new Image();
    
        image.src = "assets/"+(i++)+".jpg";
        images.appendChild(image);

    }

    if (i!==4){

        var loadMoreButtonClone = this.cloneNode(true);
        loadMoreButtonClone.onclick = loadMoreImages();
        document.body.appendChild(loadMoreButtonClone);
    }

    this.parentNode.removeChild(this);

};


window.onload = function(){
    var loadMoreButton = document.getElementById("loadMoreButton");
    // loadMoreButton.onclick = loadMoreImages();
};

