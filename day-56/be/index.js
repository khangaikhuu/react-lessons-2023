console.log('Day-56 - REST API')

const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Express REST API is running</h1>')
})

app.get('/timers', (request, response) => {

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file not found',
                data: []
            })
        }


        const timerData = JSON.parse(readData);
        console.log(timerData)
        console.log(typeof timerData)

        response.json({
            status: 'success',
            data: timerData
        })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

