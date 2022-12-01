/* DATENSTRUKTUREN */

/* Primitives */

let a = 3;

// let a // (var) Definition oder Deklaration

// Wertzuweisung / Assignment

// a = "Drei";
// a= true;
// // a=[8,9];

// console.log(typeof a);
// console.log(a);

// /* Arrays */
// // Navigation über INDEX

// let reihe = [9, 10, 11,"banana"];
// console.log("reihe = " + reihe);
// console.log(reihe[0]);
// console.log(reihe[reihe.length - 1]);

// /* Array -Info, nicht klausurrelevant*/
// //Stack

// reihe.push("5");
// reihe.push("6");
// reihe.pop();
// console.log(reihe);

/* Daten-Objekte */
// Navigation über Bezeichner (keys)

// let obj = {x:"Hello", y:"4"};
// console.log(obj);
// console.log(obj.x);

// obj = {
//         val0: 10,
//         sub1:{
//             val1: "hi",
//             val2: 2
//             }
//         };

// console.log(obj.sub1.val1);

 /*DOM*/

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"

/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/
let cond = 3;

// if (cond === "4") {  //=== Wert UND Typ
//     console.log("Aussage wahr");
// } else {
//     console.log("Aussage falsch");
// }

// switch (cond) {
//     case 4:
//         console.log("Yes");
//         break;

//     default:
//         console.log("no");
//         break;
// }
 //   https://github.com/01-PP/03_Entscheidungsstrukturen

/* FUNKTIONEN */
// 1. Kapselung
// test();
// function test() { // Fkt.-Rumpf | body
//     console.log("Testausgabe");
// }

// 2. return
//  console.log(test2());
//  function test2() { // do something ...
//     return "Testausgabe 2"; // Lieferung an die Stelle des calls
//     console.log("Noch eine Ausgabe"); // nach return Abbruch!
//  }

// 3. Parameter 
//  console.log(test3("Daniel")); // Argument(e)
//  function test3(firstName) // Parameter
//  { // do something ...
//     return "Hallo, " + firstName; 
// }

// 4. Fkt-Call aus Funktionen
console.log(test4("Robert")); // Argument(e)

function test4(firstName) // Parameter
{ 
   return grussformel() + firstName; 
   // return firstName + grussformel() ; 
}

function grussformel() {
   // return "Hallo, ";
    return "Hola, ";
}

// rechner();



