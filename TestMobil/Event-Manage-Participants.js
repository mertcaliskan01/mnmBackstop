// backstop test --config=TestMobil/Event-Manage-Participants
var url = "https://dev-new.mynextmatch.com/";


var ParticipantsTotal ="Event/EventManage/Participant/29";
var ParticipantsApproved ="Event/EventManage/Participant/29?id=29&status=1";
var ParticipantsPending ="Event/EventManage/Participant/29?id=29&status=0";
var ParticipantsRejected ="Event/EventManage/Participant/29?id=29&status=2";
var ParticipantsChecked ="Event/EventManage/Participant/29?checked-in=True";
var ParticipantsWeighed ="Event/EventManage/Participant/29?weighed-in=True";
var AddParticipant = "Event/EventManage/ParticipantAdd?eventId=29";

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

  {/////////1.Participants  Total  Page
    label: "1.Participants  Total  Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsTotal,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Participants  Total  Page CLICK Indicatör NameAreas
    label: "1.Participants  Total  Page CLICK Indicatör NameAreas",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsTotal,
    clickSelector:[
      ".dx-column-indicators",
    ],
    hideSelectors: [
      ".dx-scrollable-wrapper",
      ".dx-item.dx-list-item"
    ],
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Participants  Total  Page CLICK ColumnChooser
    label: "1.Participants  Total  Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsTotal,
    hideSelectors: [
    ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
    ".dx-datagrid-nodata"
    ],
    clickSelector:[
    ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
    ".dx-button-text"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Participants  Total  Page Hover ColumnChooser
    label: "1.Participants  Total  Page Hover ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsTotal,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Participants  Total  Page Hover AddParticipant Btn
    label: "1.Participants  Total  Page Hover AddParticipant Btn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsTotal,
    hideSelectors: [
      ".dx-scrollable-wrapper",
    ],
    hoverSelectors: ".btn.mnm-green",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Participants  Approved  Page
    label: "2.Participants  Approved  Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsApproved,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    misMatchThreshold : 0.0,
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Participants  Approved  Page CLICK Indicatör NameAreas
    label: "2.Participants  Approved  Page CLICK Indicatör NameAreas",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsApproved,
    clickSelector:[
      ".dx-column-indicators",
    ],
    hideSelectors: [
      ".dx-scrollable-wrapper",
      ".dx-item.dx-list-item"
    ],
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Participants  Approved  Page CLICK ColumnChooser
    label: "2.Participants  Approved  Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsApproved,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Participants  Approved  Page Hover ColumnChooser
    label: "2.Participants  Approved  Page Hover ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsApproved,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Participants  Approved  Page Hover AddParticipant Btn
    label: "2.Participants  Approved  Page Hover AddParticipant Btn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsApproved,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    hoverSelectors: ".btn.mnm-green",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Participants  Pending  Page
    label: "3.Participants  Pending  Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsPending,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Participants  Pending  Page CLICK Indicatör NameAreas
    label: "3.Participants  Pending  Page CLICK Indicatör NameAreas",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsPending,
    clickSelector:[
      ".dx-column-indicators",
    ],
    hideSelectors: [
      ".dx-scrollable-wrapper",
      ".dx-item.dx-list-item"
    ],
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Participants  Pending  Page CLICK ColumnChooser
    label: "3.Participants  Pending  Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsPending,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Participants  Pending  Page Hover ColumnChooser
    label: "3.Participants  Pending  Page Hover ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsPending,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////3.Participants  Pending  Page Hover AddParticipant Btn
    label: "3.Participants  Pending  Page Hover AddParticipant Btn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsPending,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    hoverSelectors: ".btn.mnm-green",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participants  Rejected  Page
    label: "4.Participants  Rejected  Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsRejected,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participants  Rejected  Page CLICK ColumnChooser
    label: "4.Participants  Rejected  Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsRejected,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participants  Rejected  Page Hover ColumnChooser
    label: "4.Participants  Rejected  Page Hover ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsRejected,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Participants  Rejected  Page Hover AddParticipant Btn
    label: "4.Participants  Rejected  Page Hover AddParticipant Btn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsRejected,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    hoverSelectors: ".btn.mnm-green",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Participants  CheckedIn  Page
    label: "5.Participants  CheckedIn  Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsChecked,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Participants  CheckedIn  Page CLICK ColumnChooser
    label: "5.Participants  CheckedIn  Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsChecked,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Participants  CheckedIn  Page Hover ColumnChooser
    label: "5.Participants  CheckedIn  Page Hover ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsChecked,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Participants  CheckedIn  Page Hover AddParticipant Btn
    label: "5.Participants  CheckedIn  Page Hover AddParticipant Btn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsChecked,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    hoverSelectors: ".btn.mnm-green",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////6.Participants  WeighedIn  Page
    label: "6.Participants  WeighedIn  Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsWeighed,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////6.Participants  WeighedIn  Page CLICK ColumnChooser
    label: "6.Participants  WeighedIn  Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsWeighed,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////6.Participants  WeighedIn  Page Hover ColumnChooser
    label: "6.Participants  WeighedIn  Page Hover ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsWeighed,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////6.Participants  WeighedIn  Page Hover AddParticipant Btn
    label: "6.Participants  WeighedIn  Page Hover AddParticipant Btn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + ParticipantsWeighed,
    hideSelectors: [
      ".dx-scrollable-wrapper"
    ],
    hoverSelectors: ".btn.mnm-green",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page
    label: "7.Participants  Add  Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    misMatchThreshold : 0.03,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK User
    label: "7.Participants  Add  Page CLICK User",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    clickSelector:[
      "#EventParticipant_UserId"
    ],
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK Organisation
    label: "7.Participants  Add  Page CLICK Organisation",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    clickSelector:[
      "#EventParticipant_OrganisationHierarchyId"
    ],
    misMatchThreshold : 0.01,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK UserRole
    label: "7.Participants  Add  Page CLICK UserRole",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    clickSelector:[
      "#EventParticipant_UserTypeToUserId"
    ],
    misMatchThreshold : 0.01,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK Division
    label: "7.Participants  Add  Page CLICK Division",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    clickSelector:[
      "#EventParticipant_SportDivisionId"
    ],
    

    misMatchThreshold : 0.03,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK EventBracket
    label: "7.Participants  Add  Page CLICK EventBracket",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    clickSelector:[
      "#EventParticipant_EventBracketId"
    ],
    

    misMatchThreshold : 0.03,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK EventTicket
    label: "7.Participants  Add  Page CLICK EventTicket",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    clickSelector:[
      ".dx-lookup.dx-lookup-popover-mode.dx-textbox.dx-texteditor.dx-editor-outlined.dx-widget.dx-lookup-empty.dx-show-clear-button.dx-dropdowneditor"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK ParticipantStatus
    label: "7.Participants  Add  Page CLICK ParticipantStatus",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    clickSelector:[
      "#EventParticipant_Status"
    ],
    selectors: [
      "viewport"
    ],  
    misMatchThreshold : 0.03,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK AppliedDate
    label: "7.Participants  Add  Page CLICK AppliedDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    clickSelector:[
      "#EventParticipant_AppliedDate"
    ],
    misMatchThreshold : 0.2,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page HOVER Back
    label: "7.Participants  Add  Page HOVER Back",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    hoverSelectors: "#mnm-back-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    delay: 500,
    misMatchThreshold : 0.01,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page HOVER Save
    label: "7.Participants  Add  Page HOVER Save",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    hoverSelectors: "#mnm-save-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    delay:500,
    misMatchThreshold : 0.01,
    requireSameDimensions: true
  },
  {/////////7.Participants  Add  Page CLICK [Info Boxes]
    label: "7.Participants  Add  Page CLICK [Info Boxes]",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    onReadyScript: `myScripts/addParticipantInfoBox.js`,
    misMatchThreshold : 0.03,
    requireSameDimensions: true
  },
  {/////////7.Participants Page NewVenue Empty Error Messages
    label: "7.Participants Page NewVenue Empty Error Messages",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + AddParticipant,
    
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