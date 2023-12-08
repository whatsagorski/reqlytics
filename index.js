const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/jobreq-url'), (req, res) => {
    console.log(`request params ${req.params}`)
}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})