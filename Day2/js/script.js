// Conditional Statements

// if (5 > 3)
//     alert("Test")

// var a = 6;
//     b = 6;

// if (a > b)
//     alert(a + " is bigger than " + b)
// else if (a < b)
//     alert(a + " is smaller than " + b)
// else{
//     alert(a + " equal to " + b)
// }

// var x = 5;
// var isEven;

// if (x % 2 == 0)
//     isEven = true;
// else
//     isEven = false;

// alert(isEven);

// -------------------------------------------------------------

// Conditional Statements

// alert(isEven = (x % 2 == 0) ? +x+" is even" : +x+ " is odd");

// -----------------------------------------------------------

// Switch toggle 

// var dayOfWeek = 6;
// switch(dayOfWeek)
// {
//     // case 1:
//     //     alert("monday");
//     //     break;
//     // case 2:
//     //     alert("tuesday");
//     //     break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         alert("It's working day !!")
//         break;
//     case 6:
//     case 7:
//         alert("It's weekend !!")
//         break;

//     default:
//         alert("This is the default day. choose other - 1 or 2.");
// }

// --------------------------------------------

// Functions 

// function test()
// {
//     // alert("Test");
//     return 5;
// }

// alert(test())
// test()

// function add(x, y){
//     return x + y;
// }

// alert(add(4, 6));

// ---------------------------------------------------

// Variable scope in function 

// var a = 5;

// function test(){
//     a = 3;
//     alert(a);
// }
// test();

// alert("Value of a when test() is now " + a);

// // 3 & 3 as a is assigned global variable inside function

// var a = 5;

// function test(a){
//     a = 3;
//     alert(a);
// }
// test();

// alert("Value of a when test(a) is now " + a);

// // 3 & 5 as a is assigned local variable inside function

// ------------------------------------------------------------

// let VS var 

/*
let: 
    1) RANGE (to block)
    2) MEMORY RELEASE (immediately after block)
    3) HOISTING (none)
    4) REDECLARATION (secure)

var:
    1) RANGE (to function)
    2) MEMORY RELEASE (after leaving function)
    3) HOISTING (yes)
    4) RE-DECLARE (declare as much as you want)
*/

// alert(age);

// var age = 3;
// if (true)
// {
//     let age = 4;

// }

// alert(age);

// -----------------------------------------------------

// let sum = 0;
// for (var i=0; i< 10; i++)
// {
//     sum += 5;
// }
//  alert(sum);

// ---------------------------------------------------

// Anonymous functions 

// var x = function()
// {
//     alert("anon function");
// }

// x();



// function test(f){
//     f(4);
// }

// test(
//     function(x){
//         alert("sample - " +x);
//     }
// );



// var hi = function(type)
// {
//     if (type === "boss")
//         return function(name){
//     alert("Hi " + name + " !!")
//     };
// };

// var returnedFunction = hi("boss");
// returnedFunction("Nitesh");

