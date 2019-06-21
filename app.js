var express = require('express')
var path = require('path')

var app = express()
var shell = require('./shellHelper');
app.use(express.static(__dirname + '/backstop_data/html_report/views'));
app.use(express.static(__dirname + '/backstop_data/html_report/TestPC'));
app.use(express.static(__dirname + '/backstop_data/html_report'));
var fs = require("fs");


app.get('/', function (req, res) {
    res.redirect('/Home');
});

app.get('/Error', function (req, res) {
    res.sendFile('backstop_data/html_report/views/error.html', { root: __dirname })
});

app.post('/Desktop', function (req, res) {
    shell.exec('backstop test --config=TestPC/' + req.query.testtype, function (err) {
        var data = "Finished";
        fs.writeFile("backstop_data/html_report/views/" + req.query.testtype + ".txt", data, (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
        fs.writeFile("backstop_data/html_report/views/Approve.txt", req.query.testtype, (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to Approve File.");
        });
        console.log('executed test');
    });
    var data = "Running";
    fs.writeFile("backstop_data/html_report/views/" + req.query.testtype + ".txt", data, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
	res.json({ success: "Updated Successfully", status: 200 });
    });
    
});

app.post('/Approve', function (req, res) {
    shell.exec('backstop approve --config=TestPC/' + req.query.testtype, function (err) {
        var data = req.query.testtype;
        fs.writeFile("backstop_data/html_report/views/approve.txt", data, (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
    });    
});

//#region PC
app.get('/Award', function (req, res) {
    res.sendFile('/backstop_data/html_report/Award_report/index2.html', { root: __dirname })
});

app.get('/Bracket', function (req, res) {
    res.sendFile('/backstop_data/html_report/Bracket_report/index2.html', { root: __dirname })
});

app.get('/Dashboard', function (req, res) {
    res.sendFile('/backstop_data/html_report/Dashboard_report/index2.html', { root: __dirname })
});

app.get('/Design', function (req, res) {
    res.sendFile('/backstop_data/html_report/Design_report/index2.html', { root: __dirname })
});

app.get('/EventProfile', function (req, res) {
    res.sendFile('/backstop_data/html_report/EventProfile_report/index2.html', { root: __dirname })
});

app.get('/MatchResult', function (req, res) {
    res.sendFile('/backstop_data/html_report/MatchResult_report/index2.html', { root: __dirname })
});

app.get('/Participants', function (req, res) {
    res.sendFile('/backstop_data/html_report/Participants_report/index2.html', { root: __dirname })
});

app.get('/ScheduleVenue', function (req, res) {
    res.sendFile('/backstop_data/html_report/ScheduleVenue_report/index2.html', { root: __dirname })
});

app.get('/Ticket', function (req, res) {
    res.sendFile('/backstop_data/html_report/Ticket_report/index2.html', { root: __dirname })
});
//#endregion

app.get('/Home', function (req, res) {
    res.sendFile('backstop_data/html_report/views/index.html', { root: __dirname })
});

app.get('*', function (req, res) {
    res.send('Bad Request');
});

app.listen(3000, function () {
    console.log('Listening on port http://localhost:3000/');
});

