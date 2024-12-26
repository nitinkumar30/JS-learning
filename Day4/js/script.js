var videoCourses = [
    "PHP",
    "MySQL",
    "Javascript",
    "PDO",
    "SASS",
    "Python"
];

// var result = document.getElementById("result");

// var i=0;

// while(i < videoCourses.length)
// {
//     if (videoCourses[i] === "MySQL")
//     {
//         result.innerHTML = "This is our DB language - ";
//     }
//     result.innerHTML += videoCourses[i] + "<br>";
//     i++;
// }

// var programmingLanguages = document.getElementById("programmingCourses").getElementsByTagName("li");

// var i = 0;

// while (programmingLanguages.length){
//     result.innerHTML += programmingLanguages[i].innerHTML + "<br>";
//     i++;
// }

// function courseDetails(courseName){
//     var details = document.getElementById(courseName).getElementsByTagName("li");

//     var i = 0;

//     while (i < details.length){
//         if (details[i].innerHTML === "PHP" || details[i].innerHTML === "MySQL")
//             result.innerHTML += "This is my language !!";

//         result.innerHTML += details[i].innerHTML + "<br>";
//         i++;
//     }
// }

// courseDetails("programmingCourses");
// courseDetails("webDevCourses");

// ------------------------------------------------------------------

// For loop


// for(var i=0; i<videoCourses.length; i++){
//     document.getElementById("result").innerHTML += i + "<br>";
// }

// ---------------------------------------------------------------------

// Break and continue 

// for (var i=0; i<5;i++){
//     if ( i==2)
//         break;
//     document.getElementById("result").innerHTML += i + "<br>";
// }

var progCourses = document.getElementById("webDevCourses").getElementsByTagName("li");

for (var i=0;i<progCourses.length; i++)
{
    progCourses[i].innerHTML = "Language :- " + progCourses[i].innerHTML;
}


