var i=0;
const sInput = "<select><option value='0'>Select List</option><option value='1'>Text</option></select>";
const tInput = "<input type='text'></input>";

function createForm() {
    createFields.append(newCreateFormControl());
}

function previewForm() {
    previewFields.empty();
    var a = $("div.fieldBlock").each(function(i,v) {
        var j = $(v).attr('id');
        previewFields.append(newPreviewFormControl($("#text"+j).val(),$("#select"+j).val()));
    });;
}

function removeField(i) {
    $("#"+i).remove();
}

function newCreateFormControl() {
    var textId = "text" + i;
    var selectId = "select" + i;
    var removeId = "remove" + i;
    var newDiv = "<div class='fieldBlock' id="+i+"><input type='text' id='"+textId+"'></input>";
    newDiv+= "<select id='"+selectId+"'><option value='0'>Select List</option><option value='1'>Text</option></select>";
    newDiv+= "<button id='"+removeId+"' onclick='removeField("+i+")'>Remove</button><div>";
    i++;
    return newDiv;
}

function newPreviewFormControl(label,input) {
    var newDiv = "<div><label>"+label+"</label>";
    newDiv+= (input == 0) ? sInput : tInput;
    newDiv+= "</div>";
    return newDiv;
}

window.onload = function() {
    this.createFields = $("#createFields");
    this.previewFields = $("#previewFields");
}