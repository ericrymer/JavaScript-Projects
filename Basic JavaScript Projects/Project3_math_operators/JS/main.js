function addition_Function(){ //Defining a function and naming it
    var addition = 2+2;// Defining a variable and giving it a value
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition;//Putting the value of result into HTML element
}

function subtraction_Function(){//Defining a function and naming it
    var Subtraction = 5-2;// Defining a variable and giving it a value
    document.getElementById("Subtract").innerHTML= "5 - 2 = " + Subtraction;//Putting the value of result into HTML element
}
function multiplication(){//Defining a function and naming it
    var simple_math = 6*8;// Defining a variable and giving it a value
    document.getElementById("Multi").innerHTML= "6 x 8 = " + simple_math;//Putting the value of result into HTML element
}
function division(){//Defining a function and naming it
    var simple_math = 48/6;// Defining a variable and giving it a value
    document.getElementById("Div").innerHTML= "48 / 6 = " + simple_math;//Putting the value of result into HTML element
}

function more_Math(){//Defining a function and naming it
    var simple_math = ( 1+ 2 ) * 10 / 2 - 5;// Defining a variable and giving it a value
    document.getElementById("MultiOP").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}//Putting the value of result into HTML element

function modulus_Operator(){//Defining a function and naming it
    var simple_math = 25 % 6;// Defining a variable and giving it a value
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}//Putting the value of result into HTML element
function negation_Operator(){//Defining a function and naming it
    var x = 10;// Defining a variable and giving it a value
    document.getElementById("Unary").innerHTML = -x;
}//Putting the value of result into HTML element
function increment_operator(){//Defining a function and naming it
    var X = 5;// Defining a variable and giving it a value
    X++;// This adds 1 to X
    document.getElementById("X").innerHTML = X++;//Putting the value of result into HTML element
}
function decrement_operator(){//Defining a function and naming it
    var Y = 5.25;
    Y--; //This subtracts 1 from Y
    document.getElementById("Y").innerHTML = Y--;//Putting the value of result into HTML element
}
window.alert(Math.random() *100);//This generates a random number
