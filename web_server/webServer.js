const express = require("express")
const fs = require("fs")
const path = require('path')


const pagePath = path.join(__dirname, 'frontDisplay', 'index.html')
const errorPath = path.join(__dirname, 'frontDisplay', 'errorPage.html')

const webServer = express()

const PORT = 2500
const HOSTNAME = "localhost"


webServer.use('/index.html', express.static(pagePath))
webServer.use('/*', express.static(errorPath))




webServer.listen(PORT, HOSTNAME,() => {
    console.log(`server started successfully at http://${HOSTNAME}:${PORT}`)
})

