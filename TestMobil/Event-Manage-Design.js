// backstop test --config=TestMobil/Event-Manage-Design
var url = "https://dev-new.mynextmatch.com/";


var Design ="Event/EventManage/Design/29";


module.exports = {
  id: `Test`,
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

  {/////////Design Page
    label: "Design Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Design,
    delay:1000,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////Design Page Hover ProfilPicture
    label: "Design Page Hover ProfilPicture",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Design,
    hoverSelectors: ".cursor-pointer.upload_btn",

    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////Design Page CLICK InfoBox
    label: "Design Page Hover InfoBox",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Design,
    onReadyScript: `myScripts/designInfoBox.js`,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////Design Page HOVER BackBtn
    label: "Design Page HOVER BackBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Design,
    hoverSelector: "#mnm-back-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    delay:500,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////Design Page HOVER SaveBtn
    label: "Design Page HOVER SaveBtn",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Design,
    hoverSelectors:"#mnm-save-button",
    selectors: [
      ".row.mnm-buttons"
    ],
    delay:500,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  }

  
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
