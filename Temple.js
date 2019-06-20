// backstop test --config=Temple

var url = "https://dev-new.mynextmatch.com/";

var Award ="Event/EventManage/Award/29";
var AwardAddDivision = "Event/EventManage/AwardAdd?eventId=29";

var Bracket ="Event/EventManage/Bracket/29";
var BracketAddDivision="Event/EventManage/BracketAdd?eventId=29";

var MatchResult ="Event/EventManage/MatchResult/29";

var ParticipantsTotal ="Event/EventManage/Participant/29";
var ParticipantsApproved ="Event/EventManage/Participant/29?id=29&status=1";
var ParticipantsPending ="Event/EventManage/Participant/29?id=29&status=0";
var ParticipantsRejected ="Event/EventManage/Participant/29?id=29&status=2";
var ParticipantsChecked ="Event/EventManage/Participant/29?checked-in=True";
var ParticipantsWeighed ="Event/EventManage/Participant/29?weighed-in=True";
var AddParticipant = "Event/EventManage/ParticipantAdd?eventId=29";

var DashboardVenue ="Event/EventManage/Venue/29";
var DashboardVenueCLICKNew ="Event/EventManage/VenueAdd?eventId=29";

var DashboardSchedule ="Event/EventManage/Schedule/29";
var DashboardScheduleCLICKNew= "Event/EventManage/ScheduleAdd?eventId=29";

var EventProfileInfo = "Event/Profile/Info/1";
var EventProfileScheduleVenue = "Event/Profile/ScheduleAndVenue/1";
var EventProfileParticipants="Event/Profile/Participants/1";
var EventProfileBrackets="Event/Profile/Brackets/1";
var EventProfileMatchResults="Event/Profile/MatchResults/1";
var EventProfileAwards="Event/Profile/Awards/1";

var Ticket ="Event/EventManage/Ticket/29";
var TicketAdd ="Event/EventManage/TicketAdd?eventId=29";

var Bracket ="Event/EventManage/Bracket/29";
var BracketNewDivision="Event/EventManage/BracketAdd?eventId=29";
var Fixture ="Event/EventManage/BracketFixture/29";
var BracketNewFixture = "Event/EventManage/BracketFixtureAdd?eventId=29";
module.exports = {
     id: `Test`,
     viewports: [
      {
      label: 'HD',
      width: 1920,
      height: 1080
      }
    ],
    onBeforeScript: `myScripts/login.js`,
    onReadyScript: `puppet/onReady.js`,
    scenarios : [

  {/////////1.Venue Page asdas
    label: "1.Venue Page asdas",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenueCLICKNew,
    clickSelector:[
      "[data-mnm-selector=\"EventVenue_CountryCode_lookup\"]", 
    ],    
    misMatchThreshold : 0.0,
    
  }

    ],
     paths:
    {
    bitmaps_reference: 'backstop_data/html_report/AllTest/Reference',
    bitmaps_test: 'backstop_data/html_report/AllTest/Test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    },
    report: ['html'],
    engine: 'puppet',
    engineOptions: {
      waitTimeout: 60000,
      args: ['--no-sandbox']    
    },
    asyncCaptureLimit: 3,
    asyncCompareLimit: 30,
    debug: false,
    debugWindow: false
};