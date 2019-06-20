// backstop test --config=TestPC/Event-Manage-Awards
var url = "https://dev-new.mynextmatch.com/";


var Award ="Event/EventManage/Award/29";
var AwardAddDivision = "Event/EventManage/AwardAdd?eventId=29";
var AwardParticipant = "Event/EventManage/ParticipantAward/29";
var AwardParticipantAdd = "Event/EventManage/ParticipantAwardAdd?eventId=29";

module.exports = {
  id: `Test`,
  viewports: [
  {
    label: 'Desktop',
    width: 1920,
    height: 1080
  }
  ],
  onBeforeScript: `myScripts/login.js`,
  onReadyScript: `puppet/onReady.js`,
   scenarios : [

                                  //NO DATA
  {/////////1.Award Page
    label: "1.Award Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Award,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Award Page CLICK ColumnChooser
    label: "1.Award Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Award,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-button-content"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Award Page HOVER ColumnChooser
    label: "1.Award Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Award,
    hoverSelectors: ".dx-button-content",
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Award Page HOVER AddAward
    label: "1.Award Page HOVER AddAward",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Award,
    hoverSelectors: ".btn.mnm-green",
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Award ADD Page
    label: "2.Award ADD Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardAddDivision,
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Award ADD Page CLICK Icon
    label: "2.Award ADD Page CLICK Icon",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardAddDivision,
    clickSelector:[
    "#EventAward_EventAwardIconId"
    ],
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Award Page HOVER SaveBtn
    label: "2.Award Page HOVER SaveBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardAddDivision,
    hoverSelectors: "#mnm-save-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Award Page HOVER BackBtn
    label: "2.Award Page HOVER BackBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardAddDivision,
    hoverSelectors: "#mnm-back-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Award ADD Page CLICK InfoBoxesANDToggle
    label: "2.Award ADD Page CLICK InfoBoxesANDToggle",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardAddDivision,
    onReadyScript: `myScripts/newAwardInfoBoxAndToggle.js`,
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Award ADD Page Empty Error Messages
    label: "2.Award ADD Page Empty Error Messages",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardAddDivision,
    
    clickSelector:[
      "#mnm-save-button" 
    ],
    delay:100,
    misMatchThreshold : 0.0,
  },
  {/////////3.Participant Award Page
    label: "3.Participant Award Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipant,
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Participant Award Page CLICK ColumnChooser
    label: "3.Participant Award Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipant,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-button-content"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Participant Award Page HOVER ColumnChooser
    label: "3.Participant Award Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipant,
    hoverSelectors: ".dx-button-content",
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    postInteractionWait:".o-page",
  

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Participant Award Page HOVER NewDivision
    label: "3.Participant Award Page HOVER NewDivision",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipant,
    hoverSelectors: ".btn.mnm-green",
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participant Award Add Page
    label: "4.Participant Award Add Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipantAdd,
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participant Award Add Page CLICK Award
    label: "4.Participant Award Add Page CLICK Award",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipantAdd,
    clickSelector:[
    "#EventParticipantAward_EventAwardId"
    ],
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participant Award Add Page CLICK Division
    label: "4.Participant Award Add Page CLICK Division",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipantAdd,
    clickSelector:[
    "#EventParticipantAward_EventBracketId"
    ],
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participant Award Add Page CLICK Participant
    label: "4.Participant Award Add Page CLICK Participant",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipantAdd,
    clickSelector:[
    "#EventParticipantAward_EventParticipantId"
    ],
    postInteractionWait:".o-page",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participant Award Page HOVER SaveBtn
    label: "4.Participant Award Page HOVER SaveBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipantAdd,
    hoverSelectors: "#mnm-save-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participant Award Page HOVER BackBtn
    label: "4.Participant Award Page HOVER BackBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipantAdd,
    hoverSelectors: "#mnm-back-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participant Award Add Page CLICK InfoBoxes
    label: "4.Participant Award Add Page CLICK InfoBoxes",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipantAdd,
    postInteractionWait:".o-page",
    onReadyScript: `myScripts/newParticipantAwardInfoBox.js`,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participant Award Add Page Empty Error Messages
    label: "4.Participant Award Add Page Empty Error Messages",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AwardParticipantAdd,
    
    clickSelector:[
      "#mnm-save-button" 
    ],
    delay:100,
    misMatchThreshold : 0.0,
  },

  ],
  paths:
  {
    bitmaps_reference: 'backstop_data/html_report/AllTest/ReferenceDesktop',
    bitmaps_test: 'backstop_data/html_report/AllTest/TestDesktop',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report/Award_report',
    ci_report: 'backstop_data/ci_report',
    json_report: "backstop_data/json_report"

  },
  report: ['html'],
  engine: 'puppet',
  engineOptions: {
    waitTimeout: 60000,
    args: ['--no-sandbox']  
  },
  asyncCaptureLimit: 2,
  asyncCompareLimit: 5,
  debug: false,
  debugWindow: false
};