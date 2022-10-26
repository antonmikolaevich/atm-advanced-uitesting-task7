export const BASE_URL = process.env.BASE_URL || "http://localhost:8080"

export const responseBody = 
        {
            "description": " ",
            "owner": "superadmin",
            "share": true,
            "id": 58,
            "name": "DEMO DASHBOARD",
            "widgets": [
                {
                    "widgetName": "LAUNCH STATISTICS AREA",
                    "widgetId": 46,
                    "widgetType": "statisticTrend",
                    "widgetSize": {
                      "width": 5,
                      "height": 5
                    },
                    "widgetPosition": {
                      "positionX": 1,
                      "positionY": 0
                    },
                    "share": true,
                    "widgetOptions": {
                      "zoom": false,
                      "timeline": "launch",
                      "viewMode": "area-spline"
                    }
                  },
                  {
                    "widgetName": "LAUNCH STATISTICS BAR",
                    "widgetId": 47,
                    "widgetType": "statisticTrend",
                    "widgetSize": {
                      "width": 6,
                      "height": 5
                    },
                    "widgetPosition": {
                      "positionX": 6,
                      "positionY": 0
                    },
                    "share": true,
                    "widgetOptions": {
                      "zoom": false,
                      "timeline": "launch",
                      "viewMode": "bar"
                    }
                  },
                  {
                    "widgetName": "TEST CASES GROWTH TREND CHART",
                    "widgetId": 49,
                    "widgetType": "casesTrend",
                    "widgetSize": {
                      "width": 5,
                      "height": 5
                    },
                    "widgetPosition": {
                      "positionX": 1,
                      "positionY": 5
                    },
                    "share": true,
                    "widgetOptions": {}
                  },
                  {
                    "widgetName": "FAILED CASES TREND CHART",
                    "widgetId": 53,
                    "widgetType": "bugTrend",
                    "widgetSize": {
                      "width": 6,
                      "height": 5
                    },
                    "widgetPosition": {
                      "positionX": 6,
                      "positionY": 10
                    },
                    "share": true,
                    "widgetOptions": {}
                  }
            ]
        }      