let navMenuAnchorTags = document.querySelectorAll('.nav-specific a');
let id;

for(let i=0;i<navMenuAnchorTags.length;i++){
  navMenuAnchorTags[i].addEventListener("click", function(event){
  	event.preventDefault();
    let targetSectionID = this.textContent.trim().toLowerCase();

    let targetSection = document.getElementById(targetSectionID);
    console.log(targetSectionID);
    if(i!==5){
         id=setInterval(function () {
                scrollVertically(targetSection);
        }, 20);
    }else{
        id=setInterval(function () {
                scrollVertically2(targetSection);
        }, 20);
    }
  });
}

function scrollVertically(targetSection) {
    let targetSectionCoordinates = targetSection.getBoundingClientRect();
  	console.log(targetSectionCoordinates.top);
  	 
    if(targetSectionCoordinates.top <= 0) {
        clearInterval(id);
        return;
    }
   	window.scrollBy(0, 20);
}

function scrollVertically2(targetSection) {
    let targetSectionCoordinates = targetSection.getBoundingClientRect();
  	console.log(targetSectionCoordinates.top);
  	 
    if(targetSectionCoordinates.top <= 150) {
        clearInterval(id);
        return;
    }
   	window.scrollBy(0, 50);
}

let progressBars=document.querySelectorAll('.skill-container >div');
//console.log(progressBars);
let skillContainer=document.getElementById('skill-container-id');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0+'%';
    }
}

initialiseBars();

function fillBars(){
    
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>=targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },5);
    }
    
}


function checkScroll(){
    var coordinates= skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
        animationDone=true;
        console.log('Skills Section Visible');
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}


