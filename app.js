// i. Get element of id “main-content” and assign them in a variable.

// var element = document.getElementById("main-content");
// console.log(element)

// ii. Display all child elements of “main-content” element.
//  var show = element.childNodes;
// console.log(show)

// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// for(i = 0; i < 5; i++){
// var all = document.getElementsByClassName("render")[i];
//     console.log(all.innerHTML);
// }




// iv. Fill input value whose element id first-name using javascript.
// var inp = document.getElementById("first-name");
// var text = document.createTextNode("Talha");
// var connect = inp.appendChild(text)
// inp.value = connect

// console.log(inp)
// v. Repeat part iv for id ”last-name” and “email”.
// var inp2 = document.getElementById("last-name");
// var text2 = document.createTextNode("Godil");
// var connect2 = inp2.appendChild(text2)
// inp2.value = connect2

// console.log(inp2)

// var inp3 = document.getElementById("email");
// var text3 = document.createTextNode("godil1@gmail.com");
// var connect3 = inp3.appendChild(text3)
// inp3.value = connect3

// console.log(inp3)

// i. What is node type of element having id “form-content”.
// var type = document.getElementById("form-content");
// document.write("Node Type ==" + " " + type.nodeType)

// ii. Show node type of element having id “lastName” and its child node.
// var type2 = document.getElementById("last-name");
// var get = type2.nodeType
// var get2 = type2.childNodes

// console.log(get2)
// iii. Update child node of element having id “lastName”.
// var update = document.getElementById("lastName");
 
// var text4 = document.createTextNode("Cristiano");

// update.replaceChild(text4,update.childNodes[0])

// iv. Get First and last child of id “main-content”.
// var main = document.getElementById("main-content");
// var first = main.firstChild
// console.log(first)
// var last = main.lastChild
// console.log(last)
// v. Get next and previous siblings of id “lastName”.
// var last1 = document.getElementById("lastName");
// var next = last1.nextSibling
// console.log(next)
// var pre = last1.previousSibling
// console.log(pre)
// vi. Get parent node and node type of element having id “email”

// var email = document.getElementById("email");
// var parent = email.parentNode
// console.log(parent)
// var type = email.nodeType
// console.log(type)


