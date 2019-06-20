// backstop test --config=TestMobil/Event-Manage-Event-Profile
var url = "https://dev-new.mynextmatch.com/";


var EventProfileInfo = "Event/Profile/Info/44";
var EventProfileScheduleVenue = "Event/Profile/ScheduleAndVenue/44";
var EventProfileParticipants="Event/Profile/Participants/44";
var EventProfileBrackets="Event/Profile/Brackets/44";
var EventProfileMatchResults="Event/Profile/MatchResults/44";
var EventProfileAwards="Event/Profile/Awards/44";
var OtherTicketIndividual="Event/Profile/RegisterIndividual/44"
var OtherTicketOrganisation="Event/Profile/RegisterOrganisation/44"

module.exports = {
  id: `Test`,
  viewports: [
  {
    label: 'MOBIL',
    width: 375,
    height: 812
  }
  ],
  onBeforeScript: `myScripts/login.js`,
  onReadyScript: `puppet/onReady.js`,
   scenarios : [


  //#region Event Info

  {/////////1.Event Profile  Event Info Page
    label: "Event Profile  Event Info Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileInfo,    
    readySelector: ".gmnoprint",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  //#endregion
  
  //#region ScheduleVenue


  {/////////2.Event Profile  ScheduleVenue Page
    label: "2.Event Profile  ScheduleVenue Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileScheduleVenue,
    clickSelector: [
      "#headingOne_62",
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Event Profile  ScheduleVenue Page CLICK SHOW
    label: "2.Event Profile  ScheduleVenue Page CLICK SHOW",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileScheduleVenue,
    clickSelector: [
      "#headingOne_62",
      "#Show"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Event Profile  ScheduleVenue Page HOVER SearchBtn
    label: "2.Event Profile  ScheduleVenue Page HOVER SearchBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileScheduleVenue,

    hoverSelectors: [
      ".btn.mnm-green.d-block"
    ],
    selectors: [
      ".show_white"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Event Profile  ScheduleVenue Page SHOW Day1
    label: "2.Event Profile  ScheduleVenue Page SHOW Day1",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileScheduleVenue,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Event Profile  ScheduleVenue Page SHOW DetailDay1
    label: "2.Event Profile  ScheduleVenue Page SHOW DetailDay1",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileScheduleVenue,
    clickSelector: [
      "#accordionExample2"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  //#endregion

  //#region Participants

  {/////////3.Event Profile  Participants Page
    label: "3.Event Profile  Participants Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileParticipants,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },

  //#endregion 

  //#region Brackets

  {/////////4.Event Profile  Brackets Page
    label: "4.Event Profile  Brackets Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileBrackets,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Event Profile  Brackets Page CLICK Country
    label: "4.Event Profile  Brackets Page CLICK Country",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileBrackets,
    clickSelector:[
      "#CountryId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Event Profile  Brackets Page CLICK Division
    label: "4.Event Profile  Brackets Page CLICK Division",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileBrackets,
    clickSelector:[
      "#EventBracketId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Event Profile  Brackets Page CLICK Area
    label: "4.Event Profile  Brackets Page CLICK Area",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileBrackets,
    clickSelector:[
      "#EventVenueToAreaId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Event Profile  Brackets Page CLICK Status
    label: "4.Event Profile  Brackets Page CLICK Status",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileBrackets,
    clickSelector:[
      "#EventMatchStatus"
    ],
    selectors: [
      "viewport"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////4.Event Profile  Brackets Page HOVER Search Box
    label: "4.Event Profile  Brackets Page HOVER Search Box",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileBrackets,
    hoverSelectors: [
      ".search_btn"
    ],
    selectors: [
      ".match_white"
    ],
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  //#endregion

  //#region Match Results

  {/////////5.Event Profile  Match Results Page
    label: "5.Event Profile  Match Results Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileMatchResults,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Event Profile  Match Results Page CLICK Country
    label: "5.Event Profile  Match Results Page CLICK Country",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileMatchResults,
    clickSelector:[
      "#CountryId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Event Profile  Match Results Page CLICK Division
    label: "5.Event Profile  Match Results Page CLICK Division",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileMatchResults,
    clickSelector:[
      "#EventBracketId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Event Profile  Match Results Page CLICK Area
    label: "5.Event Profile  Match Results Page CLICK Area",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileMatchResults,
    clickSelector:[
      "#EventVenueToAreaId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Event Profile  Match Results Page CLICK Status

    label: "5.Event Profile  Match Results Page CLICK Status",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileMatchResults,
    clickSelector:[
      "#EventMatchStatus"
    ],
    selectors: [
      "viewport"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////5.Event Profile  Match Results Page HOVER Search Box
    label: "5.Event Profile  Match Results Page HOVER Search Box",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileMatchResults,
    hoverSelectors: [
      ".search_btn"
    ],
    selectors: [
      ".match_white"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  //#endregion

  //#region Awards

  {/////////6.Event Profile  Awards Page
    label: "6.Event Profile  Awards Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileAwards,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////6.Event Profile  Awards Page CLICK Country
    label: "6.Event Profile  Awards Page CLICK Country",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileAwards,
    clickSelector:[
      "#CountryId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////6.Event Profile  Awards Page CLICK Division
    label: "6.Event Profile  Awards Page CLICK Division",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileAwards,
    clickSelector:[
      "#EventBracketId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////6.Event Profile  Awards Page CLICK Organisation
    label: "6.Event Profile  Awards Page CLICK Organisation",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileAwards,
    clickSelector:[
      "#OrganisationHierarchyId"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////6.Event Profile  Awards Page HOVER Search Box
    label: "6.Event Profile  Awards Page HOVER Search Box",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + EventProfileAwards,
    hoverSelectors: [
      ".search_btn"
    ],
    selectors: [
      ".match_white"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },


  //#endregion

  //#region OtherTicket

  {/////////7.OtherTicket Individual Page
    label: "7.OtherTicket Individual Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + OtherTicketIndividual,   
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.OtherTicket Individual Page CLICK NameAreaIndicatör
    label: "7.OtherTicket Individual Page CLICK NameAreaIndicatör",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + OtherTicketIndividual,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-header-filter.dx-header-filter-empty"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.OtherTicket Individual Page CLICK ColumnChooser
    label: "7.OtherTicket Individual Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + OtherTicketIndividual,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
      clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
      ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.OtherTicket Individual Page HOVER ColumnChooser
    label: "7.OtherTicket Individual Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + OtherTicketIndividual,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
      clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.OtherTicket Organisation Page
    label: "7.OtherTicket Organisation Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + OtherTicketOrganisation,   
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.OtherTicket Organisation Page CLICK NameAreaIndicatör
    label: "7.OtherTicket Organisation Page CLICK NameAreaIndicatör",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + OtherTicketOrganisation,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    clickSelector:[
      ".dx-header-filter.dx-header-filter-empty"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.OtherTicket Organisation CLICK ColumnChooser
    label: "7.OtherTicket Organisation CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + OtherTicketOrganisation,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
      clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ".dx-button-text"
      ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////7.OtherTicket Organisation Page HOVER ColumnChooser
    label: "7.OtherTicket Organisation Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + OtherTicketOrganisation,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
      clickSelector:[
      ".dx-dropdownmenu.dx-dropdownmenu-button.dx-button.dx-button-normal.dx-widget.dx-button-has-icon",
      ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },

  //#endregion
  
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
