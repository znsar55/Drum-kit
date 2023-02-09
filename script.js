document.addEventListener("click",(event)=>{
    var innerHTML =event.target.innerHTML ;
    
    makeSound(innerHTML);
    console.log(innerHTML);
})


document.addEventListener('keypress', (event)=>{
    let key1 =event.key;
makeSound(key1);
    console.log(key1);

})



function makeSound(key1){
    switch(key1){
        case "z":
        var boom = new Audio("boom.wav");
        boom.play();
        break;
        case "x":
        var clap = new Audio("clap.wav");
        clap.play();
        break;
        case "c":
        var hihat = new Audio("hihat.wav");
        hihat.play();
        break;
        case "v":
        var kick = new Audio("kick.wav");
        kick.play();
        break;
        case "b":
        var openhat = new Audio("openhat.wav");
        openhat.play();
        break;
        case "n":
        var ride = new Audio("ride.wav");
        ride.play();
        break;
        case "s":
        var snare = new Audio("snare.wav");
        snare.play();
        break;
        case "a":
        var tink = new Audio("tink.wav");
        tink.play();
        break;
        case "d":
        var tom = new Audio("tom.wav");
        tom.play();
        break;

        default:
    }
}


