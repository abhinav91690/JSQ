var emailError;
var dateError;
var newDob;

function emailValidate(e) {
    if(e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        emailError.hide();
    else emailError.show();
}

function dateValidate() {
    var dob = $("#dob").val().split("-");
    if(dob.length != 3) {
        dateError.show();
        return false;
    }
    var numberofDays;
    switch(dob[1].toLowerCase())
    {
        case 'jan':
        case 'mar':
        case 'may':
        case 'jul':
        case 'aug':
        case 'oct':
        case 'dec': numberofDays = 31; break;
        case 'apr':
        case 'jun':
        case 'sep':
        case 'nov': numberofDays = 30; break;
        case 'feb': numberofDays = ((dob[2]%4 == 0 && dob[2] % 100 != 0) || dob[2] % 400 == 0) ? 29 : 28; break;
        default : dateError.show(); return false;
    }

    if(Number(dob[0])>numberofDays) {
        dateError.show();
        return false;
    }

    var now = new Date();
    newDob = new Date(dob[0] + " " + dob[1] + " " + dob[2]);
    if(newDob.toString() == "Invalid Date" || (now.getTime() - newDob.getTime()) < 0 ) {
        dateError.show();
        return false;
    }
    else {
        dateError.hide();
        return true;
    }
}

function calcAge() {
    if(dateValidate())
    {
        var now = new Date();
        now.setHours(0,0,0);
        var yearDiff = now.getFullYear() - newDob.getFullYear();
        // console.log("year old " + yearDiff);
        var dobYear = new Date(newDob.getFullYear(), 0, 0, 0, 0, 0, 0);
        var dobDate = Math.floor((newDob.getTime() - dobYear.getTime()) / (1000 * 3600 * 24));
        // console.log("days of birth year " + dobDate);
        var nowYear = new Date(now.getFullYear(), 0, 0, 0, 0, 0, 0);
        var currentDate = Math.floor((now.getTime() - nowYear.getTime()) / (1000 * 3600 * 24));
        // console.log("days of current year " + currentDate);
        if(currentDate < dobDate)
        {
            yearDiff--;
            currentDate+= ((now.getFullYear()%4 == 0 && now.getFullYear()% 100 != 0) || now.getFullYear()% 400 == 0) ? 366 : 365;
        }
        var y = currentDate - dobDate;
        alert("Your age is " +yearDiff +" years and "+y+" days");
    }
}

window.onload = function() {
    emailError = $("#emailError");
    dateError = $("#dateError");
    emailError.hide();
    dateError.hide();
}