console.log('Day-90: Express TypeScript');

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_DB_URL;
app.use(express.json());
app.get('/', (req, res) => {
        res.send('<h1>Day-90: Express TypeScript</h1>');
    }
)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
});
