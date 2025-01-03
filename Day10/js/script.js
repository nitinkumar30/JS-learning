window.onload = function(){

    var info = document.getElementById("info");
    // var indexes = "A-565 B-12 K-51 A-53 A#58 S#45 A.51 a-98";
    // var result = indexes.match(/A-[0-9]{1, }/gi);

    // // info.innerHTML = result.join("<br>");

    // // var result = RegExp.exec(indexes);
    // var regExp = /A.[0-9]+/gi;
    // var result = "";
    // var row = "";
    // var i = 0;
    // while ((row = regExp.exec(indexes)) !== null){
    //     if (++i > 3)
    //         break;
    //     result += row + " ";
    // }

    // info.innerHTML = result;

    // ------------------------------------------------------

    var pw = "12345678";
    var formula = /.{8,}/;
    
    info.innerHTML = formula.test(pw);

    
}