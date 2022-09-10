# SparePartsApi

Minu rest api

### GET /parts
#### requestid
| Request | Value | Example | Description | Notes |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| FilterName | (keyword) | filterName=engine | compares if engine is in the searched word | gives everything that includes the given word |
| FilterId | (keyword) | filterId=000 | compares if entered characters are in the searched id | gives Id's that have the included characters |
| SortName | (keyword) | sortName=asc | returns names ascending | asc for ascending, desc for descending |
| SortId | (keyword) | sortId=asc | returns Id's ascending | asc for ascending, desc for descending |

#### Examples:

##### Default
        http://localhost:3030/parts
    
##### Response:
```javascript
[
        {
            "id": "00002356517",
            "name": "Valuveljed ",
            "tallinn": 0,
            "tartu": 0,
            "parnu": 0,
            "rakvere": 0,
            "kunda": 0,
            "sus1": null,
            "sus2": 90.833,
            "mark": "KIA",
            "price": 109
        }
 ]

```
##### With parameters
        http://localhost:3030/parts?filterName=engine

##### Response:
```javascript
[
        {
        "id": "0010t11",
        "name": "engine oil level check",
        "tallinn": "0",
        "tartu": "0",
        "parnu": "0",
        "rakvere": "0",
        "kunda": "0",
        "sus1": "",
        "sus2": "0",
        "mark": "",
        "price": "0"
        }
]
```

