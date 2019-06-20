// backstop test --config=TestMobil/Event-Manage-Match-Result
var url = "https://dev-new.mynextmatch.com/";


var MatchResult ="Event/EventManage/MatchResult/29";


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

  {/////////MatchResult Page CLICK
    label: "MatchResult Page CLICK [New]",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + MatchResult,
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////MatchResult Page CLICK [Country]
    label: "MatchResult Page CLICK [Country]",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + MatchResult,
    clickSelector:[
    "#CountryId"
    ],
    postInteractionWait:".o-page",
    selectorExpansion: false,
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////MatchResult Page CLICK [Division]
    label: "MatchResult Page CLICK [Division]",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + MatchResult,
    clickSelector:[
    "#EventBracketId"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////MatchResult Page CLICK [Area]
    label: "MatchResult Page CLICK [Area]",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + MatchResult,
    clickSelector:[
    "#EventVenueToAreaId"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////MatchResult Page CLICK [Status]
    label: "MatchResult Page CLICK [Status]",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + MatchResult,
    clickSelector:[
    "#EventMatchStatus"
    ],
    selectors: [
      "viewport"
    ],
    postInteractionWait:".o-page",
    misMatchThreshold : 0.0,
    requireSameDimensions: true
  },
  {/////////MatchResult Page Hover [SearchBtn]
    label: "MatchResult Page Hover [SearchBtn]",
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    url: url + MatchResult,
    hoverSelectors: "#mnm-save-button",
    selectors: [
      "#mnm-save-button"
    ],
    postInteractionWait:".o-page",
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
