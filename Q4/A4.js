function ans() {
    var a = $("#answer");
    var array = [21, 13, 2, 19, 40, 17, 49, 34, 91, 8];
    $.each(array, function(key, value) {
            var text = value + " is at position " + key;
            text+= (key < array.length/2) ? " (Available in First half of array)" : " (Available in Second half of array)";
            a.append("<li>"+ text +"</li>");
    });
}
 
window.onload = function() {
    ans();
}
 