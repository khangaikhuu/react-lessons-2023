const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())


app.post("/users", (request, response) => {
    const body = request.body
    console.log(body)

    const newUser = {
        id: Date.now().toString(),
        username: body.username,
        age: body.age
    }

    fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file does not exist',
                data: []
            })
        }

        const dataObject = JSON.parse(readData)
        console.log(dataObject)
        console.log('========')
        dataObject.push(newUser)
        console.log(dataObject)

        fs.writeFile('./data/users.json', JSON.stringify(dataObject), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'Error during file write',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: []
            })
        })
    })

})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
