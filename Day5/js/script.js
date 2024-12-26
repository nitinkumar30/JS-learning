// var programmingCourses = document.getElementById("programmingCourses").getElementsByTagName("li");

// for(var i=0; i < programmingCourses.length; i++){
//     if (i%2 !== 0)
//         programmingCourses[i].innerHTML = "Even " + programmingCourses[i].innerHTML;
//     else
//         continue;

        
//     alert(i);
// }

// --------------------------------------------------------

var videoCourses = [
    "PHP",
    "MySQL",
    "Javascript",
    "PDO",
    "SASS",
    "Python"
];

// var i=0;

// while(i < 5){
//     document.getElementById("result").innerHTML += i + "<br>";

//     i++;
// }


// for(var i = 0; i < videoCourses.length; i++){
//     document.getElementById("result").innerHTML += videoCourses[i] + "<br>";
// }

// --------------------------------------------------------

// function addNumbers()
// {
//     // alert(arguments[3]);
//     var sum = 0;
//     // for (var property in arguments)
//     // {
//     //     sum += arguments[property];
//     // }

//     for(var i = 0; i < arguments.length; i++)
//     {
//         sum += arguments[i];
//     }

//     return sum;
// }

// var sum = addNumbers(3,7,6,4);
// alert(sum);


// --------------------------------------------------------

// var x = document.getElementById("programmingCourses").childNodes[2].firstChild.nodeValue;
// var x = document.getElementById("programmingCourses").getElementsByTagName("li")[0].firstChild.nodeValue;
// var x = document.getElementById("programmingCourses").getElementsByTagName("li")[0].firstChild.textContent;
// var x = document.getElementById("programmingCourses").getElementsByTagName("li")[0].firstChild.firstChild.nodeValue;


// x.setAttribute("class", "progCoursesClass");
// x.removeAttribute("id");
// alert(x);
// alert(x.attributes[0].nodeValue);
// alert(x.getAttribute("class"));
// alert(x.nodeValue);

// --------------------------------------------------------

// var x = document.getElementById("programmingCourses").getElementsByTagName("li");
// var x = document.querySelectorAll("#programmingCourses li:nth-child(3)");
// alert(x[0].innerHTML);

// var x = document.querySelector("#programmingCourses li");
// alert(x.innerHTML);

// var courses = document.querySelectorAll("#programmingCourses li");
// courses[1].style.color = "red";
// courses[6].style.display = "none";
// courses[1].style.color = "red";

// for (var i=0;i<courses.length;i++)
// {
//     courses[i].style.color = "red";

// }

// --------------------------------------------------------

// Adding & Removing elements 

var p = document.createElement("p");
p.style.color = "red";
p.style.textAlign = "center";
p.className = "test";
p.innerHTML = "Something New";

var body = document.querySelector("body");
body.appendChild(p);


// --------------------------------------------------------


