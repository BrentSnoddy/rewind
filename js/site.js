//Controller Function
// GET THE STRING FROM THE PAGE 
function getString(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}
//Logic Function
// REVERSE THE STRING
function reverseString(userString){

    let revString = [];


    //let name = "BOBBY";
    //name[0] = "B";
    //name[4] = "y";
    //last position in an array is name.length - 1

    //reverse a string using a "FOR LOOP"
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }
    return revString;
}
// Display Function
// DISPLAY REVERSE STRING TO THE USER
function displayString(revString){

    //write message to page
    document.getElementById("msg").innerHTML = `Your String Reversed is: ${revString}`
    //turn on alert box
    document.getElementById("alert").classList.remove("invisible")
}