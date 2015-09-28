define({ "api": [
  {
    "type": "get",
    "url": "/v1/stocks",
    "title": "Fetch an existing stock",
    "name": "GetStock",
    "description": "<p>Retrieves an already existing stock object from the database.</p> ",
    "group": "Stocks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the security</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "symbol",
            "description": "<p>Stock symbol of the security</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cik",
            "description": "<p>SEC CIK number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "exchange",
            "description": "<p>The exchange the security is traded on.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"Apple Inc.\",\n    \"symbol\": \"AAPL\",\n    \"cik\": \"0000320193\",\n    \"exchange\": \"NASDAQ\"\n}",
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
    "url": "/v1/stocks",
    "title": "Fetch a list of stocks",
    "name": "GetStocks",
    "description": "<p>Retrieves a list of all stocks</p> ",
    "group": "Stocks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array[]</p> ",
            "optional": false,
            "field": "stocks",
            "description": "<p>List of all matched stocks</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "stocks.name",
            "description": "<p>Name of the security</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "stocks.symbol",
            "description": "<p>Stock symbol of the security</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "stocks.cik",
            "description": "<p>SEC CIK number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "stocks.exchange",
            "description": "<p>The exchange the security is traded on.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    stocks: [\n      {\n          \"name\": \"Apple Inc.\",\n          \"symbol\": \"AAPL\",\n          \"cik\": \"0000320193\",\n          \"exchange\": \"NASDAQ\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/stocks/index.js",
    "groupTitle": "Stocks"
  },
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
          "content": "{\n    \"location\": \"https://api.example.com/v1/stocks/AAPL\"\n}",
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