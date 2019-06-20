// backstop test --config=TestMobil/Event-Manage-Dashboard
var url = "https://dev-new.mynextmatch.com/";


var Dashboard ="Event/EventManage/Dashboard/29";


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

  {/////////Dashboard Page
    label: "Dashboard Page",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + Dashboard,
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
