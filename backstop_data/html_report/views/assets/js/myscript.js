


function readfile(buttonId, statusId, reportId, link, type, reportUrl) {

    document.getElementById(statusId).src = 'assets/img/running.svg';
    document.getElementById(reportId).src = 'assets/img/loading-mark.svg';
    document.getElementById(link).href = "/Error";

    $.ajax({
        url: '/Desktop?testtype=' + type,
        type: 'POST',
        datatype: "json",
        error: function (result) {
            console.log("ERROR" + result.status)
        },
        success: function (result) {
            if (result.status == 200) {
                console.log("OK" + result.status)
            }
        },
    });

}
function hidesection(buttonId) {
    document.getElementById(buttonId).style.visibility = 'hidden';
}


setInterval(control, 1000);
var a = 0;
var reportUrl;
var type;

function control() {

    b = a % 9 + 1
    a++;

    switch (b) {
        case 1:
            reportUrl = "Award";
            type = "Event-Manage-Awards";
            break;
        case 2:
            reportUrl = "Bracket";
            type = "Event-Manage-Bracket";
            break;
        case 3:
            reportUrl = "Dashboard";
            type = "Event-Manage-Dashboard";
            break;
        case 4:
            reportUrl = "Design";
            type = "Event-Manage-Design";
            break;
        case 5:
            reportUrl = "EventProfile";
            type = "Event-Manage-Event-Profile";
            break;
        case 6:
            reportUrl = "MatchResult";
            type = "Event-Manage-Match-Result";
            break;
        case 7:
            reportUrl = "Participants";
            type = "Event-Manage-Participants";
            break;
        case 8:
            reportUrl = "ScheduleVenue";
            type = "Event-Manage-Schedule-Venue";
            break;
        case 9:
            reportUrl = "Ticket";
            type = "Event-Manage-Ticket";
            break;
    }

    jQuery.get(type + '.txt', function (data) {

        if (data == "Finished") {
            document.getElementById("status" + b).src = 'assets/img/yoga-posture.svg';
            document.getElementById("report" + b).src = 'assets/img/shield.svg';
            document.getElementById("btn" + b).style.visibility = 'visible';
            document.getElementById("reportlink" + b).href = "/" + reportUrl;
        }
        if (data == "Running") {
            document.getElementById("status" + b).src = 'assets/img/running.svg';
            document.getElementById("report" + b).src = 'assets/img/loading-mark.svg';
            document.getElementById("btn"+b).style.visibility = 'hidden';
            document.getElementById("reportlink" + b).href = "/Error";
        }
    }, 'text');
}


setInterval(zamanGoster, 1000);

function zamanGoster() {
    var saat = new Date();
    document.getElementById("timer").innerHTML = saat.toLocaleTimeString();
}

function searchFunction() {
    var input, filter, search, text;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    for (var i = 0; i <= 9; i++) {
        $('.section' + i).hide();
    }
    if ("AWARDS".startsWith(filter)) {
        $('.section1').show();
    }
    if ("BRACKET".startsWith(filter)) {
        $('.section2').show();
    }
    if ("DASHBOARD".startsWith(filter)) {
        $('.section3').show();
    }
    if ("DESIGN".startsWith(filter)) {
        $('.section4').show();
    }
    if ("EVENTPROFILE".startsWith(filter)) {
        $('.section5').show();
    }
    if ("MATCHRESULT".startsWith(filter)) {
        $('.section6').show();
    }
    if ("PARTICIPANTS".startsWith(filter)) {
        $('.section7').show();
    }
    if ("SCHEDULEVENUE".startsWith(filter)) {
        $('.section8').show();
    }
    if ("TICKET".startsWith(filter)) {
        $('.section9').show();
    }
}

