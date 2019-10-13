function ans() {
    var a = $("#answer");
    var data = JSON.parse('[{"ID":"101","Name":"The Good Parts ","Category":"JS","Detail":{"Price":"100$","Page Count":"200","Paper Type":"Wax paper"}},{"ID":"102","Name":"The Definitive Guide ","Category":"JavaScript","Detail":{"Price":"70$","Page Count":"200","Paper Type":"Leather paper"}},{"ID":"103","Name":"CoffeeScript ","Category":"Scripting","Detail":{"Price":"90$","Page Count":"200","Paper Type":"Kraft paper"}},{"ID":"104","Name":"Exploring ES6 ","Category":"Browser","Detail":{"Price":"40$","Page Count":"200","Paper Type":"Book paper"}}]');
    var tableContent = "<tbody>";
    $.each(data, function(key, value)
    {
        var row = "<tr>";
        row = "<td>"+ value.ID +"</td>";
        row +="<td>"+ value.Name +"</td>";
        row +="<td>"+ value.Category +"</td>";
        row +="<td>"+ value.Detail.Price +"</td>";
        row +="<td>"+ value.Detail["Page Count"]+"</td>";
        row +="<td>"+ value.Detail["Paper Type"] +"</td> </tr>";
        tableContent += row; 
    });
    a.append(tableContent +"</tbody>");
}
function buttonClick() {
    $("thead").toggleClass("rotate-text");
}
window.onload = function() {
    ans();
}