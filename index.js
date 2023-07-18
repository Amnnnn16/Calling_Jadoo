for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function() {


    var buttoninner=this.innerHTML;
    play_sound(buttoninner);
    when_pressed(buttoninner);
    
})}

document.addEventListener("keypress",function(event){
    play_sound(event.key);
when_pressed(event.key);
});

function play_sound(key){
    switch(key){
        case "a":
            var aud1=new Audio("audio/one.mp3");
            aud1.play();
            break;
        
        case "b":
            var aud2=new Audio("audio/two.mp3");
            aud2.play();
            break;

        case "c": 
            var aud3=new Audio("audio/three.mp3");
            aud3.play();
            break;
        
        case "d":
            var aud4=new Audio("audio/four.mp3");       
            aud4.play();
            break;
        
        case "e":
            var aud5=new Audio("audio/five.mp3");
            aud5.play();
            break;
        
        default:
           
    }
}
function when_pressed(key){
    document.querySelector("."+key).classList.add("pressed")
    setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed");
        
    }, 100);
}