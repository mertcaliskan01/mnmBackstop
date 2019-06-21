
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

setInterval(control, 3000);

var first = setInterval(control, 100);

function control() {
    for (b = 0; b < 9; b++) {
        switch (b) {
            case 0:
                reportUrl = "Award";
                type = "Event-Manage-Awards";
                datastatus(b+1,reportUrl,type);
                break;
            case 1:
                reportUrl = "Bracket";
                type = "Event-Manage-Bracket";
                datastatus(b+1,reportUrl,type);
                break;
            case 2:
                reportUrl = "Dashboard";
                type = "Event-Manage-Dashboard";
                datastatus(b+1,reportUrl,type);
                break;
            case 3:
                reportUrl = "Design";
                type = "Event-Manage-Design";
                datastatus(b+1,reportUrl,type);
                break;
            case 4:
                reportUrl = "EventProfile";
                type = "Event-Manage-Event-Profile";
                datastatus(b+1,reportUrl,type);
                break;
            case 5:
                reportUrl = "MatchResult";
                type = "Event-Manage-Match-Result";
                datastatus(b+1,reportUrl,type);
                break;
            case 6:
                reportUrl = "Participants";
                type = "Event-Manage-Participants";
                datastatus(b+1,reportUrl,type);
                break;
            case 7:
                reportUrl = "ScheduleVenue";
                type = "Event-Manage-Schedule-Venue";
                datastatus(b+1,reportUrl,type);
                break;
            case 8:
                reportUrl = "Ticket";
                type = "Event-Manage-Ticket";
                datastatus(b+1,reportUrl,type);
                break;
        }
    }

    

    jQuery.get('Approve.txt', function (data) {
        document.getElementById("approveBtn").innerText = data;
    }, 'text');
}

function datastatus(b,reportUrl,type) {
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
            document.getElementById("btn" + b).style.visibility = 'hidden';
            document.getElementById("reportlink" + b).href = "/Error";
        }
    }, 'text');
    clearInterval(first);
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

function approveBtn() {
    jQuery.get('Approve.txt', function (data) {

        $.ajax({
            url: '/Approve?testtype=' + data,
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
    }, 'text');
}

