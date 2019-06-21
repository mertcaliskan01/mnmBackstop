report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../AllTest/ReferenceDesktop/Test_Dashboard_Page_0_document_0_Desktop.png",
        "test": "../AllTest/TestDesktop/20190621-193018/Test_Dashboard_Page_0_document_0_Desktop.png",
        "selector": "document",
        "fileName": "Test_Dashboard_Page_0_document_0_Desktop.png",
        "label": "Dashboard Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0,
        "url": "https://dev-new.mynextmatch.com/Event/EventManage/Dashboard/29",
        "expect": 0,
        "viewportLabel": "Desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.01",
          "analysisTime": 79
        },
        "diffImage": "../AllTest/TestDesktop/20190621-193018/failed_diff_Test_Dashboard_Page_0_document_0_Desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "Test"
});