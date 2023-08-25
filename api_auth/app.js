const express = require('express')
const app = express()
const itemsRoute = require('./router/router.js')

app.use(express.json())
app.use('/items', itemsRoute)




const PORT = 4100


app.listen(PORT, () => {
    console.log(`app started successfully at ${PORT}`)
})