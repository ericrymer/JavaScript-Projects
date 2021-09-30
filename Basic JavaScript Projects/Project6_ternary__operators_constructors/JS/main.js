function Vehicle(Make, Model, Year, Color){//Defining a function and naming it
this.Vehicle_Make= Make;// Defining a variable and giving it a value
this.Vehicle_Model= Model;// Defining a variable and giving it a value
this.Vehicle_Year= Year;// Defining a variable and giving it a value
this.Vehicle_Color= Color;// Defining a variable and giving it a value
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");// Defining a variable and giving it a value
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "Black");// Defining a variable and giving it a value
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");// Defining a variable and giving it a value
function myFunction(){
document.getElementById("Keywords_and_Constructions").innerHTML = "Erik drives a " + Erik.Vehicle_Color + " -colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}//Putting the value of result into HTML element

function count_Function(){//Defining a function and naming it
  document.getElementById("Counting").innerHTML = Count();
  function Count() {//Defining a function and naming it
      var Starting_point = 9;// Defining a variable and giving it a value
      function Plus_one() {Starting_point +=1;}// Defining a variable and giving it a value
      Plus_one();
      return Starting_point;//Putting the value of result into HTML element
  }
}

function Nested_Function(){//Defining a function and naming it
    let a = 4;// Defining a variable and giving it a value
    document.getElementById("Nested").innerHTML = a * a;//Putting the value of result into HTML element
  }
function ternary_Function(){
  var Food, Best_food;
  Food = document.getElementById("Food").value;
  Best_food = (Food == "cookie") ? "Correct! That is my favorite food!":"Sorry! Try again!";
  document.getElementById("food").innerHTML = Best_food;
}