console.log('day - 55')
const express = require('express')

const app = express()
app.use(express.json())

app.use(express.static('public'))

const PORT = 8080

const returnHTML = `
    <html>
        <head>
            <title>Hello ExpressJS</title>
            <link href="/style.css" rel="stylesheet">
        </head>
        <body>
            <h1>Hello Express</h1>
            <button onclick="alertMe()">Click me</button>
            <script src="/script.js"></script>
        </body>
    </html>
`

app.get('/', (request, response) => {
    response.send(returnHTML)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})