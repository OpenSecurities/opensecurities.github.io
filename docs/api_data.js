define({ "api": [
  {
    "type": "get",
    "url": "/v1/version/protected",
    "title": "Auth-protected API version",
    "name": "GetProtectedVersion",
    "description": "<p>Returns the same content as GetVersion, but behind is auth-protected. This is useful for testing/validating auth mechanisms.</p> ",
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