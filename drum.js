var numberofbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i< numberofbuttons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninnerHTML = this.innerHTML;
        // console.log(buttoninnerHTML);
        makesound(buttoninnerHTML)
      
    })
}         
 
document.addEventListener("keypress",function(event){
    makesound(event.key)
})

function makesound(key){

    if (key==document.querySelectorAll(".drum")[0].innerHTML){
        var tom1 = new Audio("tom-1.mp3");
        tom1.play(); 
    }
    else if (key==document.querySelectorAll(".drum")[1].innerHTML){
        var tom2= new Audio("tom-2.mp3")
        tom2.play()
    }
    else if (key==document.querySelectorAll(".drum")[2].innerHTML){
        var tom3= new Audio("tom-3.mp3")
        tom3.play()
    }
    else if (key==document.querySelectorAll(".drum")[3].innerHTML){
        var tom4= new Audio("tom-4.mp3")
        tom4.play()
    }
    else if (key==document.querySelectorAll(".drum")[4].innerHTML){
        var snare= new Audio("snare.mp3")
        snare.play()
    }
    else if (key==document.querySelectorAll(".drum")[5].innerHTML){
        var crash= new Audio("crash.mp3")
        crash.play()
    }else if (key==document.querySelectorAll(".drum")[6].innerHTML){
        var crash= new Audio("kick-bass.mp3")
        crash.play()
    }else {
        alert("enter the given key to play the drum")
    }
}

















// for (var i =0 ; i< numberofbuttons ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       
//         var buttoninnerHTML = this.innerHTML;
//         switch (buttoninnerHTML) {
//             case "w" : 
//                 var tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "a" :
//                 var tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
//             case "s" :
//                 var tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
//             case "d" :
//                 var tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
//             case "j" :
//                 var snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;
//             case "k" :
//                 var crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//             case "l" :
//                 var kick = new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;
                
//             default: console.log(buttoninnerHTML);
//         }
//     });
// }



