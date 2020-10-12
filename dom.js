let val;

// // HTML COLLECTION
// val = document;
// val = document.all;
// val = document.all[1]; // access item
// val = document.all.length; // count elements of the DOM
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;

// val = document.forms;
// val = document.forms[0].id;

// val = document.links;

// // SINGLE ELEMENT SELECTORS
// // document.getElementById()
// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// // Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = 'white';
// document.getElementById('task-title').style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content
// document.getElementById('task-title').textContent = "Task list";
// document.getElementById('task-title').innerText = "My Tasks";
// document.getElementById('task-title').innerHTML = "<span>Task list</span>";

// // document.querySelector() => more powerful
// console.log(document.querySelector('#task-title')); // # by ID, . by class, h1

// document.querySelector('li').style.color = 'red'; // only the first one
// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'red'; // last child
// document.querySelector('li:nth-child(3)').style.color = 'yellow'; // 3rd child

// document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // only the first odd

// // document.getElementsByClassName
// // document.getElementsByTagName

// // let lis = document.getElementsByTagName('li');
// // lis = Array.from(lis) // now it's an array

// // lis.forEach(function(li, index){
// //   console.log(li.className);
// //   li.textContent = `Hello ${index}`;
// // });

// // document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `Hello ${index}`;
// });

// //

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item'); // select the first one

val = listItem;
val = list;

// Get child nodes
val = list.childNodes; // return a node list

// Get children element nodes
val = list.children; // return a HTML list
val = list.children[1];
// Children of children
val = list.children[3].children;

val = list.firstElementChild;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val);
