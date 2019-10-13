var container;
var numbersContainer;
var droppedArray = [];

function buildBox() {
    var i,j;
    for(i=0;i<8;i++) {
        var row = $("<div>", {class: "row"});
        for(j=0;j<8;j++) {
            var box = $("<div>", {class: "box"});
            row.append(box);
        }
        container.append(row);
    }
}

function pattern(i) {
    clearPatterns();
    switch(i) {
        case 1: $(".box").addClass("green"); break;
        case 2: for(i=0;i<8;i++) {
                    var t = $(".row").eq(i).children();
                    t.filter(':nth-child('+(i+1)+')').addClass("red");
                    t.filter(':nth-last-child('+(i+1)+')').addClass("red");
                }
                break;
        case 3: for(i=1;i<5;i++) {
                    var color;
                    switch(i) {
                        case 1: color = "red"; break;
                        case 2: color = "green"; break;
                        case 3: color = "white"; break;
                        case 4: color = "blue"; break;
                    }
                    $('.box:nth-child('+i+')').slice(i-1,9-i).addClass(color);
                    $('.box:nth-last-child('+i+')').slice(i-1,9-i).addClass(color);
                    $('.row:nth-child('+i+')').children().slice(i-1,9-i).addClass(color);
                    $('.row:nth-last-child('+i+')').children().slice(i-1,9-i).addClass(color);
                }               
                break;
    }
}

function clearPatterns() {
    $(".box").removeClass("green");
    $(".box").removeClass("red");
    $(".box").removeClass("blue");
    $(".box").removeClass("white");
}

window.onload = function() {
    container = $("#container");
    buildBox();
}