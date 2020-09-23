var id=document.getElementById("toggle");
var text=document.querySelector("#text");
var circle=document.querySelector("#circle");
var count=0;
id.addEventListener('click',function(){
    count++;
    if(count%2){
        document.body.style.backgroundColor = "black";
        text.style.color="white";
        circle.style.marginLeft="101px";
        circle.style.backgroundColor="white";
        id.style.backgroundColor="black";
        id.style.borderColor="white";
    
    }else{
        document.body.style.backgroundColor = "white";
        text.style.color="black";
        circle.style.marginLeft="3px";
        circle.style.backgroundColor="black";
        id.style.backgroundColor="white";
        id.style.borderColor="black";
    }
    
});
