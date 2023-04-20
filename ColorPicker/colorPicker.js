
var red = blue = green= 0; //rgb(variables) 

//First Trial
function colorGenerator(){
    red = Math.floor(Math.random() * 255) + 1;
    green = Math.floor(Math.random() * 255) + 1; 
    blue = Math.floor(Math.random() * 255) + 1;

}
function colorPicker(){
    colorGenerator();
   document.getElementById("container").style.backgroundColor = `rgb(${red},${green},${blue})`
}


//second Trial
function colorGenerator2(){
    return Math.floor(Math.random() * 255) + 1;
}

function colorPicker2(){
    document.getElementById("container").style.backgroundColor = `rgb(${colorGenerator2()},${colorGenerator2()},${colorGenerator2()})`
}