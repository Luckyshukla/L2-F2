// alert javascript in built function
alert('Welcome in Basic Javascript \nDid you want to lern it ?')


// if Else Condition and confirm
var txt;
  if (confirm("Press a button!")) {
    txt = "Thanks to  pressed OK! you'r Welcom";
  } else {
    txt = "Oo o pressed Cancel!";
  }
document.getElementById("demo").innerHTML = txt;


// prompt
let name;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    name = "Hello " + person + "! How are you today?";
  }
  document.getElementById("name").innerHTML = name;


// function
function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text;
}
