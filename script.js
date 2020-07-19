var navMenuAnchorTags = document.querySelectorAll('.nav-specific a');
var id;
for(var i=0;i<navMenuAnchorTags.length;i++){
  navMenuAnchorTags[i].addEventListener("click", function(event){
  	event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();

    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSectionID);
    
     id=setInterval(function () {
            scrollVertically(targetSection);
    }, 20);
	});

}

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
  	console.log(targetSectionCoordinates.top);
  	 
    if(targetSectionCoordinates.top <= 140) {
        clearInterval(id);
        return;
    }
   	window.scrollBy(0, 20);
}
