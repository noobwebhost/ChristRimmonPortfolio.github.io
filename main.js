let mon=document.getElementById('moon');
let eart=document.getElementById('earth');

window.addEventListener("wheel", function(event) {

    
    // Check if scrolling down
    if (event.deltaY > 0) {
        // Add CSS animation properties
        mon.style.animationName = 'shrik';
        mon.style.animationDuration = "3s";
        
      
       
    }
});



window.addEventListener("wheel", function(event) {

    
    // Check if scrolling up
    if (event.deltaY < 0) {
        // Add CSS animation properties
        mon.style.animationName = 'zoomin';
        mon.style.animationDuration = "3s";
        
        
        
    }
});





window.addEventListener("wheel", function(event) {

    
    // Check if scrolling down
    if (event.deltaY > 0) {
        // Add CSS animation properties
        eart.style.animationName = 'movedown';
        eart.style.animationDuration = "2.5s";
        
      
       
    }
});



window.addEventListener("wheel", function(event) {

    
    // Check if scrolling up
    if (event.deltaY < 0) {
        // Add CSS animation properties
        eart.style.animationName = 'moveup';
        eart.style.animationDuration = "3s";
        
        
        
    }
});



let etext=document.getElementById('pass1');

let passage = ['Hi, I am a London-based Full Stack developer. Looking for a job right now feel free to connect with me.'];

function timegi(){
let index = 0;
for (let i = 0; i < passage.length; i++) {
    
    for (let j = 0; j < passage[i].length; j++) {
        setTimeout(function() {
            
            if(passage[i].charAt(j)==='.'){
            etext.innerHTML += passage[i].charAt(j) + '<br>';
            }else{
            etext.innerHTML += passage[i].charAt(j);
            
            }
            
        }, 100 * index);
        index++;
    }
    
}
}

setTimeout(timegi,900)


let arrimg = ['./images/slide1.jpg','./images/slide2.jpg'];
let orgimg = document.getElementById('orgima');
function logi(){
for (let i = 0; i < arrimg.length; i++) {
    setTimeout(function() {
        orgimg.src = arrimg[i];
    }, 3000 * i); // Set timeout with increasing delay for each image
}
}
setInterval(logi,3000)

let buton=document.getElementById('fire');
let starwars=document.getElementById('ship');
buton.onclick=function(){
    starwars.style.animationName='';
    starwars.style.animationDuration='';
    void starwars.offsetWidth;
    starwars.style.animationName='shipmove';
    starwars.style.animationDuration='3s';

  
    
}



