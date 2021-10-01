function count_To_Ten(){//Defines a function
    var Digit =  ""; //Defines variable
    var X = 1; //Defines variable
    while(X <11){ //While X is less than 11, do the following
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML=Digit; //Putting the value of result into HTML element
}

//For Loops//
var Instruments = ["Guitar", "Drums","Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y; //Defines variable
function for_Loop(){ //Defines a function
    for (Y=0; Y <Instruments.length; Y++){
        Content +=Instruments[Y]+"<br>";
    }
    document.getElementById("Lists_of_Instruments").innerHTML=Content; //Putting the value of result into HTML element
}

//Arrays and Objects//

function cat_pics(){ //Defines a function
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping"; //Defines variable
    Cat_Picture[1] = "playing"; //Defines variable
    Cat_Picture[2] = "eating"; //Defines variable
    Cat_Picture[3] = "purring"; //Defines variable
    document.getElementById("Cat").innerHTML="In this picture, the cat is " + Cat_Picture[2] + "."; //Putting the value of result into HTML element
}

//Const Keyword//
function constant_function(){ //Defines a function
    const Musical_Instrument = {type:"bike", brand:"Schwinn", color:"red"};
    Musical_Instrument.color="blue"; //Defines variable
    Musical_Instrument.price="$1,900"; //Defines variable
    document.getElementById("Constant").innerHTML="The cost of the " + 
        Musical_Instrument.brand + " "+ Musical_Instrument.type + " was " + Musical_Instrument.price; //Putting the value of result into HTML element
}

//Let Function//

function let_function(){ //Defines a function
    var  x = 11;
    document.write(x); //Putting the value of result into HTML element
        {  
        let x = 2;//Changes X to 2
        document.write("<br>" + x); //Putting the value of result into HTML element
        }
    document.write("<br>" + x);} //Putting the value of result into HTML element