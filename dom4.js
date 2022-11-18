
//var itemList= document.querySelector('#items');


// 1. parent element
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = 'green';
//console.log(itemList.parentElement.parentElement.parentElement);


//create child
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor= 'yellow'

//First Child
//console.log(itemList.firstChild);
//first element child
//console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent = 'Hello 1'


//last child
//console.log(itemList.lastChild);
//last element child
//console.log(itemList.lastElementChild)
//itemList.lastElementChild.textContent = 'Hello 4'

// next sibling
//console.log(itemList.nextSibling);
// next element sibling
//console.log(itemList.nextElementSibling);

//previous sibling
//console.log(itemList.previousSibling);
// previous element sibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color= 'red'


// create element
// create a div
var newDiv = document.createElement('div');
// add class

newDiv.className= 'hello';

//add atrribute
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('Hello World');

//aDD TEXT TO DIV
newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

//console.log(newDiv);

//container.insertBefore(newDiv, h1);

// add hello world before item 1;

let Item = document.querySelector('div .title1');
let h2 = document.querySelector('li h2');

Item.insertBefore(newDiv, h2);







