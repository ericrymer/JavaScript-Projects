function my_Dictionary(){//Defining a function and naming it
    var Animal = {// Defining a variable and giving it a value
        Species:"Cat",// Defining a variable and giving it a value
        Color:"Black",// Defining a variable and giving it a value
        Breed:"Ragdoll",// Defining a variable and giving it a value
        Age:4, // Defining a variable and giving it a value
        Sound:"Meow!"// Defining a variable and giving it a value
    };
    delete Animal.Sound;//Delete variable Sound
document.getElementById("Dictionary").innerHTML= Animal.Sound;//Putting the value of result into HTML element
}