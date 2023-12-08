const cors = require('cors')
const express = require('express')
const multer  = require('multer')


const port = process.env.PORT || 8080
const upload = multer()
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/jobreq-url', upload.none(), (req, res) => {
    console.log(`job req URL ${req.body.jobrequrl}`)
    res.send('We did it')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})