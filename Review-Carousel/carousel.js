
const reviewArray = [
    {
        personImage:"./images/w2.jpg",
        questionImage:"./images/comma.jpg",
        name: "Dawson Tate",
        profession:" Web Developer",
        description: " I am the first American to arrive the village of BAYO",
       
    },
    {
        personImage:"./images/woman.jpg",
        questionImage:"./images/comma.jpg",
        name: "Manoica limited",
        profession:" Geographer",
        description: " Hello i know what you are thinking",
       
    },
    {
        personImage:"./images/man1.jpg",
        questionImage:"./images/comma.jpg",
        name: "Andrew Carmegie",
        profession:" Entrepreneur",
        description: " He taught Napoleon Hill into what we now admire",
       
    
    },
    {
        personImage:"./images/woman.jpg",
        questionImage:"./images/comma.jpg",
        name: "Manoica limited",
        profession:" Geographer",
        description: " Hello i know what you are thinking",
       
    },


]

var i = 0;


//getting the review container to replace each carousel everytime


function rightPreview(){ 
    if(i < reviewArray.length){
        const img = document.querySelector(".image");
        img.src = reviewArray[i].personImage;
       document.querySelector(".name").innerHTML = reviewArray[i].name;
       document.querySelector(".profession").innerHTML = reviewArray[i].profession;
       document.querySelector(".description").innerHTML = reviewArray[i].description;
       ;
    i++
    }
    

}

function leftPreview(){ 
    if(i > 0){
        const img = document.querySelector(".image");
        img.src = reviewArray[i].personImage;
       document.querySelector(".name").innerHTML = reviewArray[i].name;
       document.querySelector(".profession").innerHTML = reviewArray[i].profession;
       document.querySelector(".description").innerHTML = reviewArray[i].description;
       ;
    i--;
    }
    
}

function surpriseMe(){

    const ran = Math.floor(Math.random()* 3);
    const img = document.querySelector(".image");
        img.src = reviewArray[ran].personImage;
       document.querySelector(".name").innerHTML = reviewArray[ran].name;
       document.querySelector(".profession").innerHTML = reviewArray[ran].profession;
       document.querySelector(".description").innerHTML = reviewArray[ran].description;

}




