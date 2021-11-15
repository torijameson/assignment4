window.addEventListener("load", function(){
    console.log('window loaded');


//HTML ELEMENTS 
const ninetiesMod=document.getElementById("ninetiesMod");
//const mp3 =audio.getElementbyId("mp3");
const undoNinetiesMod=document.getElementById("undoNinetiesMod");

//Nineties Button in Header
ninetiesMod.addEventListener("click", function(){
    
    //Background. Color is in place in case of picture error. 
    document.body.style.backgroundColor = "yellow";
    document.body.style.backgroundRepeat ="no repeat";
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundImage = "url('/images/90sbsb.jpg')";
    //fonts
    document.body.style.fontFamily= "Brush Script MT, cursive";
    document.body.style.color="green";
    //audio 
    // move audio from paused to play. 
});

undoNinetiesMod.addEventListener("click", function (){ 
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundRepeat ="none";
    document.body.style.backgroundImage = "none";
    //fonts
    document.body.style.fontFamily= "Veranda, serif";
    document.body.style.color="black";
    //audio 
    // move audio from playing to paused
}); 




}); // belongs to window.load
