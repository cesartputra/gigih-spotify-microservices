const express = require('express')
const app = express()
const port = 3000

const songRoute = require('./routes/song.route')

app.use(express.json())

app.use('/api/playlist', songRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))