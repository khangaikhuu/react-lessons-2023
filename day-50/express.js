const express = require('express')
var bodyParser = require('body-parser')

let timerData = {
    data: [{
        "title": "Mow the lawn",
        "project": "House Chores",
        "elapsed": 5459795,
        "id": "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
        "runningSince": null
    }, {
        "title": "Clear paper jam",
        "project": "Office Chores",
        "elapsed": 1273998,
        "id": "a73c1d19-f32d-4aff-b470-cea4e792406a"
    }, {
        "title": "Ponder origins of universe",
        "project": "Life Chores",
        "id": "2c43306e-5b44-4ff8-8753-33c35adbd06f",
        "elapsed": 218230384401,
        "runningSince": null
    }]
}

const PORT = 8080
const app = express()
app.use(bodyParser.json())
app.get("/", (request, response) => {
    response.send('Hello Express Server')
})

app.get("/data", (request, response) => {
    response.json(timerData)
})

app.post("/data", (request, response) => {
    console.log(request.body)
    timerData.data.push(request.body)

    response.json(timerData)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

