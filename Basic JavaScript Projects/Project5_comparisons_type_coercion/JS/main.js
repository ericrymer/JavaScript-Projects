function myFunction() { //== This defines a function
    var res = "";
    res = res + isNaN('Hello') + ": This is a string <br>";//==This gives values for strings 
    res = res + isNaN(-1.23) + ": -1.23 <br>"; //==This gives values for strings
    document.getElementById("demo").innerHTML = res;//==Putting the value of result into HTML element
  }
  

document.write(10==10); //==Double Equal Sign to check if true/false
document.write("<br>")//==Ads a break on the page.
document.write(3==11);//==Double Equal Sign to check if true/false
document.write("<br>")//==Ads a break on the page.
X=10;//== Gives X a value of 10
Y=10;//== Gives Y a value of 10
document.write(X===Y)//==This will gives us a true or false answer

document.write("<br>")//==Ads a break on the page.
document.write("<br>")//==Ads a break on the page.
document.write(5>2 && 10>4);//== This will compare both sides and if equal will show true, if not equals false.

document.write("<br>")//==Ads a break on the page.
document.write("<br>")//==Ads a break on the page.
document.write(5>2 || 10>4);//== This will compare both sides, if either is correct the value will be true.

document.write("<br>")//==Ads a break on the page.
document.write("<br>")//==Ads a break on the page.
function not_Function(){
    document.getElementById("Not").innerHTML=!(5>10);//==! Not operator checks whether or not something is true.
}