function nocopy(event) { 
    var event = event || window.event; 
    if (event.preventDefault) { event.preventDefault(); } 
    else { event.returnValue = false; } 
    return false; 
} 

document.onmouseup = nocopy; 
document.onmousemove = nocopy; 
document.ondragstart = nocopy; 
document.onselectstart = nocopy; 
document.ontextmenu = nocopy; 
document.oncopy = nocopy;