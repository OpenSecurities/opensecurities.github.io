define({ "api": [
  {
    "type": "put",
    "url": "/v1/stocks",
    "title": "Create or modify stock",
    "name": "NewStock",
    "description": "<p>Creates a new stock if it does not already exist. Otherwise it updates the existing stock.</p> ",
    "group": "Stocks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>URI of created resource</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"location\": \"https://api.example.com/v1/stocks/AAPL\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/stocks/index.js",
    "groupTitle": "Stocks"
  },
  {
    "type": "get",
    "url": "/v1/version/protected",
    "title": "Auth-protected API version",
    "name": "GetProtectedVersion",
    "description": "<p>Returns the same content as GetVersion, but is auth-protected. This is useful for testing/validating auth mechanisms.</p> ",
    "group": "Version",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "version",
            "description": "<p>API Version.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"version\": \"1.2.3\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/version.js",
    "groupTitle": "Version"
  },
  {
    "type": "get",
    "url": "/v1/version",
    "title": "API build version",
    "name": "GetVersion",
    "description": "<p>Current API build version.</p> ",
    "group": "Version",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "version",
            "description": "<p>API Version.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"version\": \"1.2.3\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/version.js",
    "groupTitle": "Version"
  }
] });