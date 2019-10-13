var dropContainer;
var numbersContainer;
var droppedArray = [];

function onDragStart(e) {
    e.dataTransfer.setData("id", e.target.id);
}

function allowDrop(e) {
    e.preventDefault();
}

function onDrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("id");
    droppedArray.push(data);
    droppedArray.sort(function(a,b){return a-b;});
    var index = droppedArray.indexOf(data);
    if(index == 0) {
        dropContainer.prepend(document.getElementById(data));
    }
    else {
        var afterDiv = droppedArray[index-1];
        $("#"+afterDiv).after(document.getElementById(data));
    }
}

window.onload = function() {
    dropContainer = $(".drop-container")[0];
    numbersContainer = $(".numbers-container")[0];
}