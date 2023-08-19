const express = require("express")
const app = express()
const itemRoute = require('./db/route')
 

const PORT = 3900

app.use(express.json())
app.use('/items', itemRoute)


app.listen(PORT, () => {
    console.log(`server started successfully at http://localhost:${PORT}`)
})