// backstop test --config=TestMobil/Event-Manage-Bracket

var url = "https://dev-new.mynextmatch.com/";


var Bracket ="Event/EventManage/Bracket/29";
var BracketNewDivision="Event/EventManage/BracketAdd?eventId=29";
var Fixture ="Event/EventManage/BracketFixture/29";
var BracketNewFixture = "Event/EventManage/BracketFixtureAdd?eventId=29";
module.exports = {
  id: `TestMobil`,
  viewports: [
    {
    label: 'MOBIL',
    width: 460,
    height: 812
    }
  ],
  onBeforeScript: `myScripts/login.js`,
  onReadyScript: `puppet/onReady.js`,
  scenarios : [

  {/////////1.Bracket Divisions Page
    label: "1.Bracket Divisions Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Bracket,
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Bracket Divisions Page CLICK ColumnChooser
    label: "1.Bracket Divisions Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Bracket,
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Bracket Divisions Page HOVER ColumnChooser
    label: "1.Bracket Divisions Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Bracket,
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Bracket Divisions Page HOVER NewDivision
    label: "1.Bracket Divisions Page HOVER NewDivision",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Bracket,
    hoverSelectors: ".btn.mnm-green",
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Bracket Divisions ADD Page
    label: "2.Bracket Divisions ADD Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewDivision,
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Bracket Divisions ADD Page CLICK Division
    label: "2.Bracket Divisions ADD Page CLICK Division",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewDivision,
    clickSelector:[
      "#EventBracketMultiple_SportDivisionIds"
    ],
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Bracket Divisions ADD Page CLICK BracketType
    label: "2.Bracket Divisions ADD Page CLICK BracketType",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewDivision,
    clickSelector:[
      "#EventBracketMultiple_Type"
    ],
    selectors: [
      "viewport"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Bracket Divisions ADD Page CLICK InfoBoxesANDToggle
    label: "2.Bracket ADD Page CLICK InfoBoxesANDToggle",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewDivision,
    onReadyScript: `myScripts/newBracketInfoBoxAndToggle.js`,
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Bracket Divisions ADD Page HOVER SaveBtn
    label: "2.Bracket ADD Page HOVER SaveBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewDivision,
    hoverSelectors:[
      "#mnm-save-button",
    ], 
    selectors: [
      ".row.mnm-buttons"
    ],
    postInteractionWait:".o-page",

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Bracket Divisions ADD Page HOVER BackBtn
    label: "2.Bracket ADD Page HOVER BackBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewDivision,
    hoverSelectors:[
      "#mnm-back-button"
    ], 
    selectors: [
      ".row.mnm-buttons"
    ],
    postInteractionWait:".o-page",

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Bracket Divisions ADD Page Empty Error Messages
    label: "2.Bracket Divisions ADD Page Empty Error Messages",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewDivision,
    
    clickSelector:[
      "#mnm-save-button" 
    ],
    delay:100,
    misMatchThreshold : 0.0,
  },
  {/////////3.Bracket Fixture Page
    label: "3.Bracket Fixture Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Fixture,
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Bracket Fixture Page CLICK ColumnChooser
    label: "3.Bracket Fixture Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Fixture,
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Bracket Fixture Page HOVER ColumnChooser
    label: "3.Bracket Fixture Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Fixture,
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Bracket Fixture Page HOVER NewFixture
    label: "3.Bracket Fixture Page HOVER NewFixture",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Fixture,
    hoverSelectors: ".btn.mnm-green",
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page
    label: "4.Bracket Fixture ADD Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page CLICK EventBracket
    label: "4.Bracket Fixture ADD Page CLICK EventBracket",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    clickSelector:[
      "#EventMatch_EventBracketId"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page CLICK Round
    label: "4.Bracket Fixture ADD Page CLICK Round",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    clickSelector:[
      "#EventMatch_BracketRoundLevel"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page CLICK Match
    label: "4.Bracket Fixture ADD Page CLICK Match",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    clickSelector:[
      "#EventMatch_MatchIds"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page CLICK Schedule
    label: "4.Bracket Fixture ADD Page CLICK Schedule",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    clickSelector:[
      "#EventMatch_EventScheduleId"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page CLICK Area // ClassName
    label: "4.Bracket Fixture ADD Page CLICK Area",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    clickSelector:[
      ".dx-lookup.dx-lookup-popover-mode.dx-textbox.dx-texteditor.dx-editor-outlined.dx-widget.dx-lookup-empty.dx-show-clear-button.dx-dropdowneditor"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page CLICK StartDateTime
    label: "4.Bracket Fixture ADD Page CLICK StartDateTime",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    clickSelector:[
      "#EventMatch_StartDateAndTime"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.7,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page CLICK InfoBoxes
    label: "4.Bracket Fixture ADD Page CLICK InfoBoxes",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    onReadyScript: `myScripts/newFixtureInfoBoxAndToggle.js`,
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page HOVER SaveBtn
    label: "4.Bracket Fixture ADD Page HOVER SaveBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    hoverSelectors:[
      "#mnm-save-button",
    ], 
    selectors: [
      ".row.mnm-buttons"
    ],
    postInteractionWait:".o-page",

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page HOVER BackBtn
    label: "4.Bracket Fixture ADD Page HOVER BackBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    hoverSelectors:[
      "#mnm-back-button"
    ], 
    selectors: [
      ".row.mnm-buttons"
    ],
    postInteractionWait:".o-page",

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Bracket Fixture ADD Page Empty Error Messages
    label: "4.Bracket Fixture ADD Page Empty Error Messages",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + BracketNewFixture,
    clickSelector:[
      "#mnm-save-button" 
    ],
    delay:100,
    misMatchThreshold : 0.0,
  },


  ],
  paths:
  {
    bitmaps_reference: 'backstop_data/html_report/AllTest/ReferenceMobil',
    bitmaps_test: 'backstop_data/html_report/AllTest/TestMobil',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
    json_report: "backstop_data/json_report"
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