// Objects 

// var div = document.getElementById("test");
// div.innerHTML = "this is the altered text";

// var person = {
//     name: "Nitin",
//     surname: "Kumar",
//     age: 19,
//     isAdult: function()
//     {
//         if (this.age < 18){
//             return false;
//         }
//         return true;
//     },
//     toString: function()
//     {
//         return this.name;
//     }
// };

// var personDetails = document.getElementById("person");
// personDetails.innerHTML = "Name : "+ person.name + " & Surname : " + person.surname;

// div.innerHTML = person.isAdult();

// ----------------------------------------------------------------------

// Class

// var div = document.getElementById("test");
// div.innerHTML = "this is the altered text";

// var person = {
//     name: "Nitin",
//     surname: "Kumar",
//     age: 19,
//     isAdult: function()
//     {
//         if (this.age < 18){
//             return false;
//         }
//         return true;
//     },
//     toString: function()
//     {
//         return this.name;
//     }
// };

// function person(name, surname, age)
// {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     // this.somethingNew = 5;
//     this.isAdult= function()
//     {
//         if (this.age < 18){
//             return false;
//         }
//         return true;
//     };
//     this.toString= function()
//         {
//             return this.name + " " + this.surname + " " + this.age;
//         };    
// }

// var x = new person("Nitin", "Kumar", 26);
// var y = new person("Somi", "Kumari", 29);
// var z = new person("Sanju", "Devi", 46);

// // Object prototype
// person.prototype.somethingNew = 125;

// div.innerHTML = " | " + x.somethingNew + " | " + y + " | " + z + " | ";

// -------------------------------------------------------------------

// Arrays

// var products = [
//     "HTML",
//     "PHP",
//     "MySQL"
// ];
// products[3] = "Javascript";
// products[products.length] = "SQL Server";
// products.push("React.JS");

// // alert(products[1]);
// // alert(products[3]);

// // alert(products);

// var progCourses = document.getElementById("programmingCourses").getElementsByTagName("li");
// alert(progCourses[progCourses.length-1].innerHTML);

// -----------------------------------------------------------------

// Array methods

// join
// concat
// length
// pop
// push 
// shift 
// unshift
// sort 
// slice 
// splice - delete sliced elements


var videoCourses = [
    "PHP",
    "MySQL",
    "Javascript",
    "PDO",
    "SASS",
    "Python"
];
var numbers = [
    4,-14,24,12,12,55
];

document.getElementById("result").innerHTML = videoCourses.join("<br>");
// document.getElementById("result").innerHTML = videoCourses.length;
// document.getElementById("result").innerHTML += videoCourses;
// document.getElementById("result").innerHTML = videoCourses.concat(numbers);
// document.getElementById("test").innerHTML = videoCourses.pop();
// document.getElementById("test").innerHTML = videoCourses.push("HTML");
document.getElementById("test").innerHTML = videoCourses.reverse();
document.getElementById("result").innerHTML = numbers.sort(function(a,b){return a-b;}); 
// need to add for numbers
document.getElementById("result").innerHTML = videoCourses.slice(1,3);
// document.getElementById("result").innerHTML = videoCourses.splice(1,3);





