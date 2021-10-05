function Food_Function(){
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String= " is a great food!";
    switch(Foods){
        case "Pizza":
            Color_Output = "Pizza" + Food_String;
        break;
        case "Tacos":
            Color_Output = "Tacos" + Food_String;
        break;
        case "Steak":
            Color_Output = "Steak" + Food_String;
        break;
        case "Chicken":
            Color_Output = "Chicken" + Food_String;
        break;
        case "Salad":
            Color_Output = "Salad" + Food_String;
        break;
        case "Pasta":
            Color_Output = "Pasta" + CFood_String;
        break;
        default:
        Color_Output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,10,90,80,90);
grd.addColorStop(0,"green");
grd.addColorStop(1,"darkblue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);