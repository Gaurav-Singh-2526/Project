const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='g'){
            body.style.backgroundColor = "grey";
        }  
        if(e.target.id==='y'){
            body.style.backgroundColor = "yellow";
        } 
        if(e.target.id==='w'){
            body.style.backgroundColor = "white";
            body.style.color="black";
        }if(e.target.id==='b'){
            body.style.backgroundColor="black";
            body.style.color="white";
        
        }
    })
})