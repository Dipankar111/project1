//make 2nd items background green
//var items = document.getElementsByClassName('list-group-item');
//console.log(items[1]);
//items[1].style.backgroundColor = 'green';


// Make 3rd elemnt invisible
//items[2].style.display = "none";

// change the font color to green for 2nd item in the item list
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = "green"

// Choose all the odd elements and make their background green using QuerySelectorALL
var odd= document.querySelectorAll('li:nth-child(odd)');

for( var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor= 'green'
}

