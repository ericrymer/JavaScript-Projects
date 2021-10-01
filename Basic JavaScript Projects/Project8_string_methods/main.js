//Concat Method//
function full_sentence(){ //Defines function
    var part_1 ="I have ";//Defines variable
    var part_2="made this ";//Defines variable
    var part_3 ="into a complete ";//Defines variable
    var part_4 ="sentence.";//Defines variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;//Putting the value of result into HTML element
}
//Slice Method//

function slice_method(){//Defines function
    var sentence ="All work and no play makes Johnny a dull boy.";//Defines variable
    var section = sentence.slice(27,33);//slices values 27-33
    document.getElementById("Slice").innerHTML = section;//Putting the value of result into HTML element
}
//Number Method//

function string_method(){//Defines function
    var X = 182;//Defines variable
    document.getElementById("numbers_to_string").innerHTML = X.toString();//Putting the value of result into HTML element
}

//TOPRECISION Method//
function precision_method(){//Defines function
    var X = 12938.301298737376112;//Defines variable
    document.getElementById("Precision").innerHTML = X.toPrecision(7);//Putting the value of result into HTML element
}