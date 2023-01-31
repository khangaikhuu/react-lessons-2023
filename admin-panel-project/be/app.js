console.log('it is my app.js')
// import necessary module
const express = require('express')
const cors = require('cors')
const fs = require('fs')

/// configuration of modules
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})




