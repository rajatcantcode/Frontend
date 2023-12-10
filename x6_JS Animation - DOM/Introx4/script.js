//Creating and Deleting elements

var head1 = document.createElement("h1");
//h1 has been successfully created you could check that on console
//just type 'head1' as it's been saved in 'head1'
head1.textContent = "hey";
//Till now element is in JS file

//wheretoplacetheelement.appendChild()
document.querySelector("body").appendChild(head1);
//This will add element in HTML too

/*----------------------------------------------------------------------- */
var img = document.createElement("img");
img.src =
  "https://images.unsplash.com/photo-1700730025710-58ff304c1c8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8";
document.querySelector("body").appendChild(img);

//REMOVE CHILD
document.querySelector("body").removeChild(img);
document.querySelector("body").removeChild(head1);
//BUT THIS WILL BE THERE IN CONSOLE just type img / head1 as it's not been removed from JS file
