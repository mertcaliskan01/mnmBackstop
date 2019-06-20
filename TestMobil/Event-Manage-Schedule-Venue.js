// backstop test --config=TestMobil/Event-Manage-Schedule-Venue
var url = "https://dev-new.mynextmatch.com/";


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

  {/////////1.Venue Page
    label: "1.Venue Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenue,
    
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Venue Page CLICK SubMenu
    label: "1.Venue Page CLICK SubMenu",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenue,
    clickSelector:[
      ".dx-item.dx-menu-item.dx-menu-item-has-submenu"
    ],
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Venue Page CLICK More
    label: "1.Venue Page CLICK More",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenue,
    clickSelector:[
      ".dx-datagrid-adaptive-more"
    ],
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Venue Page CLICK ColumnChooser
    label: "1.Venue Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenue,
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
  {/////////1.Venue Page HOVER ColumnChooser
    label: "1.Venue Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenue,
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
  {/////////1.Venue Page HOVER NewBtn
    label: "1.Venue Page HOVER NewBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenue,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    hoverSelectors: ".btn.mnm-green",
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Venue Page CLICK Indicatör NameAreas
    label: "1.Venue Page CLICK Indicatör NameAreas",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenue,
    clickSelector:[
      ".dx-column-indicators",
    ],
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Venue Page CLICK  NameAreas
    label: "1.Venue Page CLICK  NameAreas",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenue,
    clickSelector:[
      ".dx-datagrid-action.dx-cell-focus-disabled.dx-datagrid-drag-action",
    ],
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Venue Page NewVenue
    label: "1.Venue Page NewVenue",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenueCLICKNew,
    
    readySelector: ".gmnoprint",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Venue Page NewVenue CLICK CompetitionArea
    label: "1.Venue Page NewVenue CLICK CompetitionArea",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenueCLICKNew,
    clickSelector:[
      "#EventVenue_SportToCompetitionAreaId" 
    ],
    
    readySelector: ".gmnoprint",
    misMatchThreshold : 0.0,
  },
  {/////////1.Venue Page NewVenue CLICK WriteNewArea
    label: "1.Venue Page NewVenue CLICK WriteNewArea",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenueCLICKNew,
    clickSelector:[
      "#EventVenue_Areas_EditBox" 
    ],
    
    readySelector: ".gmnoprint",
    misMatchThreshold : 0.0,
  },
  // {/////////1.Venue Page NewVenue CLICK Country Not work
  //   label: "1.Venue Page NewVenue CLICK Country",
  //   cookiePath: "backstop_data/engine_scripts/cookies.json",
  //   url: url + DashboardVenueCLICKNew,
  //   clickSelector:[
  //     ".dx-lookup.dx-lookup-popover-mode.dx-textbox.dx-texteditor.dx-editor-outlined.dx-widget.dx-lookup-empty.dx-show-clear-button.dx-dropdowneditor" 
  //   ],    
  //   readySelector: ".gmnoprint",
  //   misMatchThreshold : 0.0,
  // },
  {/////////1.Venue Page NewVenue Empty Error Messages
    label: "1.Venue Page NewVenue Empty Error Messages",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenueCLICKNew,
    
    clickSelector:[
      "#mnm-save-button" 
    ],
    delay:100,
    readySelector: ".gmnoprint",
    misMatchThreshold : 0.0,
  },
  {/////////1.Venue Page CLICK InfoBoxes
    label: "1.Venue Page CLICK InfoBoxes",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardVenueCLICKNew,
    
    onReadyScript: `myScripts/newVenueInfoBox.js`,
    readySelector: ".gmnoprint",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Schedule Page
    label: "2.Schedule Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardSchedule,

    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  // {/////////2.Schedule Page CLICK SubMenu
  //   label: "2.Schedule Page CLICK SubMenu",
  //   cookiePath: "backstop_data/engine_scripts/cookies.json",
  //   url: url + DashboardSchedule,
  //   clickSelector:[
  //     ".dx-menu-item-popout"
  //   ],
  //   misMatchThreshold : 0.0,
  //   requireSameDimensions: true
  // },
  {/////////2.Schedule Page CLICK More
    label: "2.Schedule Page CLICK More",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardSchedule,
    clickSelector:[
      ".dx-datagrid-adaptive-more"
    ],
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Schedule Page CLICK ColumnChooser
    label: "2.Schedule Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardSchedule,
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
  {/////////2.Schedule Page HOVER ColumnChooser
    label: "2.Schedule Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardSchedule,
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
  {/////////2.Schedule Page HOVER NewBtn
    label: "2.Schedule Page HOVER NewBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardSchedule,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    hoverSelectors: ".btn.mnm-green",
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  // {/////////2.Schedule Page CLICK Indicatör NameAreas
  //   label: "2.Schedule Page CLICK Indicatör NameAreas",
  //   cookiePath: "backstop_data/engine_scripts/cookies.json",
  //   url: url + DashboardSchedule,
  //   hideSelectors: [
  //     ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
  //     ".dx-datagrid-nodata"
  //   ],
  //   clickSelector:[
  //     ".dx-header-filter.dx-header-filter-empty",
  //   ],
  //   misMatchThreshold : 0.0,
  //   requireSameDimensions: true
  // },
  // {/////////2.Schedule Page CLICK  NameAreas
  //   label: "2.Schedule Page CLICK  NameAreas",
  //   cookiePath: "backstop_data/engine_scripts/cookies.json",
  //   url: url + DashboardSchedule,
  //   hideSelectors: [
  //     ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
  //     ".dx-datagrid-nodata"
  //   ],
  //   clickSelector:[
  //     ".dx-datagrid-text-content.dx-text-content-alignment-left.dx-header-filter-indicator.dx-sort-indicator",
  //   ],
  //   misMatchThreshold : 0.0,
  //   requireSameDimensions: true
  // },
  {/////////2.Schedule Page NewSchedule
    label: "2.Schedule Page NewSchedule",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardScheduleCLICKNew,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Schedule Page NewSchedule Empty Error Messages
    label: "2.Schedule Page NewSchedule Empty Error Messages",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardScheduleCLICKNew,
    clickSelector:[
      "#mnm-save-button"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Schedule Page NewSchedule CLICK Type
    label: "2.Schedule Page NewSchedule CLICK Type",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardScheduleCLICKNew,
    clickSelector:[
      "#EventSchedule_ScheduleType"
    ],
    selectors: [
      "viewport"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Schedule Page NewSchedule CLICK Venue
    label: "2.Schedule Page NewSchedule CLICK Venue",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardScheduleCLICKNew,
    clickSelector:[
      ".dx-lookup-field-wrapper"
    ],
    
    readySelector: ".dx-button-content",
    

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Schedule Page NewSchedule CLICK StartDate
    label: "2.Schedule Page NewSchedule CLICK StartDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardScheduleCLICKNew,
    clickSelector:[
      "#EventSchedule_StartDateAndTime"
    ],
    misMatchThreshold : 0.3,
    requireSameDimensions: true
  },
  {/////////2.Schedule Page NewSchedule CLICK EndDate
    label: "2.Schedule Page NewSchedule CLICK EndDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardScheduleCLICKNew,
    clickSelector:[
      "#EventSchedule_EndDateAndTime"
    ],
    misMatchThreshold : 0.3,
    requireSameDimensions: true
  },
  {/////////2.Schedule Page NewSchedule CLICK Info Boxes
    label: "2.Schedule Page NewSchedule CLICK Info Boxes",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + DashboardScheduleCLICKNew,
    onReadyScript: `myScripts/newScheduleInfoBox.js`,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
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