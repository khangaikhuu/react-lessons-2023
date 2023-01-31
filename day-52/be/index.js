const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.delete('/users', (request, response) => {
    const body = request.body
    fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file reader error',
                data: []
            })
        }

        const readObject = JSON.parse(readData)

        const filteredObjects = readObject.filter(o => o.id !== body.userId)
        fs.writeFile('./data/users.json', JSON.stringify(filteredObjects), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'write file error',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: filteredObjects
            })
        })
    })

})

app.get('/users', (request, response) => {
    fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: "file reader error",
                data: []
            })
        }

        const objectData = JSON.parse(readData)

        response.json({
            status: 'success',
            data: objectData
        })
    })
})

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
                data: dataObject
            })
        })
    })

})

app.put('/users', (request, response) => {
    console.log(request.body)

    fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file read error',
                data: []
            })
        }
        const savedData = JSON.parse(readData);
        const changedData = savedData.map(d => {
            if (d.id === request.body.id) {
                d.username = request.body.username,
                    d.age = request.body.age
            }
            return d
        })

        fs.writeFile('./data/users.json', JSON.stringify(changedData), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'file write error',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: changedData
            })

        })
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
