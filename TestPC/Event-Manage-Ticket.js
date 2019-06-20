// backstop test --config=TestPC/Event-Manage-Ticket

var url = "https://dev-new.mynextmatch.com/";


var Ticket ="Event/EventManage/Ticket/29";
var TicketAdd ="Event/EventManage/TicketAdd?eventId=29";

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


    {/////////1.Ticket Page
    label: "1.Ticket Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Ticket,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Ticket Page CLICK ColumnChooser
    label: "1.Ticket Page CLICK ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Ticket,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
      clickSelector:[
      ".dx-button-content"
      ],      
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Ticket Page HOVER ColumnChooser
    label: "1.Ticket Page HOVER ColumnChooser",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Ticket,
    hoverSelectors: ".dx-button-content",
    hideSelectors: [
    ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
    ".dx-datagrid-nodata"
    ],    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Ticket Page CLICK SubMenu
    label: "1.Ticket Page CLICK SubMenu",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Ticket,
    clickSelector:[
    ".dx-item.dx-menu-item.dx-menu-item-has-submenu"
    ],
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Ticket Page CLICK More
    label: "1.Ticket Page CLICK More",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Ticket,
    clickSelector:[
    ".dx-datagrid-adaptive-more"
    ],
    
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Ticket Page HOVER AddTicket
    label: "1.Ticket Page HOVER AddTicket",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Ticket,
    hoverSelectors: ".btn.mnm-green",
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Ticket Page CLICK Indicatör NameAreas
    label: "1.Ticket Page CLICK Indicatör NameAreas",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Ticket,
    clickSelector:[
    ".dx-column-indicators",
    ],
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////1.Ticket Page CLICK  NameAreas
    label: "1.Ticket Page CLICK  NameAreas",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Ticket,
    clickSelector:[
    ".dx-datagrid-action.dx-cell-focus-disabled.dx-datagrid-drag-action",
    ],
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page
    label: "2.Ticket ADD Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    hideSelectors: [
      ".dx-row.dx-data-row.dx-row-lines.dx-column-lines",
      ".dx-datagrid-nodata"
      ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK TicketType
    label: "2.Ticket ADD Page CLICK TicketType",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      "#EventTicket_Type"
    ],
    selectors: [
      "viewport"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK UserRole
    label: "2.Ticket ADD Page CLICK UserRole",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      "#EventTicket_SelectedUserTypeToSportIds"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK Currency
    label: "2.Ticket ADD Page CLICK Currency",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      ".dx-lookup.dx-lookup-popover-mode.dx-textbox.dx-texteditor.dx-editor-outlined.dx-widget.dx-lookup-empty.dx-show-clear-button.dx-dropdowneditor"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK StandartRegisterStartDate
    label: "2.Ticket ADD Page CLICK StandartRegisterStartDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      "#EventTicket_StartDate"
    ],
    misMatchThreshold : 0.07,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK EarlyRegisterStartDate
    label: "2.Ticket ADD Page CLICK EarlyRegisterStartDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      "#EventTicket_EarlyStartDate"
    ],
    misMatchThreshold : 0.07,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK LateRegisterStartDate
    label: "2.Ticket ADD Page CLICK LateRegisterStartDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      "#EventTicket_LateStartDate"
    ],
    misMatchThreshold : 0.07,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK StandartRegisterEndDate
    label: "2.Ticket ADD Page CLICK StandartRegisterEndDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      "#EventTicket_EndDate"
    ],
    misMatchThreshold : 0.07,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK EarlyRegisterEndDate
    label: "2.Ticket ADD Page CLICK EarlyRegisterEndDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      "#EventTicket_EarlyEndDate"
    ],
    
    

    misMatchThreshold : 0.07,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK LateRegisterEndDate
    label: "2.Ticket ADD Page CLICK LateRegisterEndDate",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    clickSelector:[
      "#EventTicket_LateEndDate"
    ],
    misMatchThreshold : 0.07,
    requireSameDimensions: true
  },
  {/////////2.Ticket ADD Page CLICK InfoBoxesANDToggle
    label: "2.Ticket ADD Page CLICK InfoBoxesANDToggle",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    onReadyScript: `myScripts/newTicketInfoBoxAndToggle.js`,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Ticket Page HOVER BackBtn
    label: "2.Ticket Page HOVER BackBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    hoverSelectors: "#mnm-back-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Ticket Page HOVER SaveBtn
    label: "2.Ticket Page HOVER SaveBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    hoverSelectors: "#mnm-save-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////2.Ticket Page NewVenue Empty Error Messages
    label: "2.Ticket Page NewVenue Empty Error Messages",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + TicketAdd,
    
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
    html_report: 'backstop_data/html_report/Ticket_report',
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