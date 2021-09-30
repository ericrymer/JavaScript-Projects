//Global Variable//
var X= 10; // Gives value to variable
function Add_numbers_1(){ //Defines function
    document.write(20 + X + "<br>"); //Write out 20+ X value and add a break
}
function Add_numbers_2(){//Defines function
    document.write(X + 100); //Write out X value plus 100
}
Add_numbers_1(); //Writes out number 1
Add_numbers_2();//Writes out number 2

document.write("<br>")//Adds a break between the global and local variables
//Local Variable//

function Add_numbers_3(){//Defines function
    var Y= 5;// Gives value to variable
    document.write(20 + Y + "<br>");//Write out 20+ Y value and add a break
}
function Add_numbers_4(){//Defines function
    document.write(Y + 100);//Write out Y + 100 
}
Add_numbers_3(); //Writes out number 3
Add_numbers_4();//Writes out number 4

document.write("<br>") //Adds a break

function Add_numbers_5(){//Defines function
    var Z= 5;// Gives value to variable
    console.log(20 + Z + "<br>");
}
function Add_numbers_6(){//Defines function
    console.log(Z + 100);
}
Add_numbers_5(); //Writes out number 5
Add_numbers_6();//Writes out number 6

function get_Date(){//Defines function
    if(new Date().getDate()>10){// If current time is after 10am
        document.getElementById("Greeting").innerHTML="I missed breakfast!";//Putting the value of result into HTML element
    }
}

function Age_function(){//Defines function
    Age = document.getElementById("Age").value;// Gives value to variable
    if(Age >= 18){//If variable is greater or equal to 18
        Vote = "You are old enough to vote!";//Value if true
    }
    else {
        Vote = "You are not old enough to vote!";//Value if false
    }
    document.getElementById("how_old_are_you?").innerHTML = Vote;//Putting the value of result into HTML element
}
function Time_function(){//Defines function
    var Time = new Date().getHours();// Gives value to variable
    var Reply;
    if (Time <12 == Time > 0){//If time is is between 12am-12pm
        Reply = "It is morning time!";//Displays value
    }
    else if(Time >= 12 == Time< 18) {//If time is is between 12pm-6pm
        Reply = "It is the afternoon.";//Displays value
    }
    else{
        Reply= "It is evening time."; //Displays value
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//Putting the value of result into HTML element
}

