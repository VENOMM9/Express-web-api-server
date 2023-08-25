const path = require('path')
const fs = require('fs')
const db = require('../db/students.js')
const studentsPath = path.join(__dirname, '../db', 'students.js')


const basicAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)


    if (!authHeader) {
        return res.status(401).json({ message: 'this student is not authenticated' })
    }
      console.log(req.header)
    const base64 = new Buffer.from(authHeader.split(' ')[1], 'base64')
    console.log(base64)
    const base64ToString = base64.toString()
    console.log(base64ToString)
    const usernameAndPassword = base64ToString.split(':');
    const auth = usernameAndPassword;

    const username = auth[0]
    const password = auth[1]

    console.log(password)
    const studentArr = db.users
    console.log(studentArr)


    const existingStudent = studentArr.find(user => user.username == username && user.password == password)
    // console.log(existingStudent)

    if (existingStudent) {
        req.user = existingStudent
        next()
        console.log(existingStudent)
    }
    else {
        return res.status(401).json({ message:'this student is not authenticated'})
    }


  
    }



const apiKeyAuth = (req, res, next) => {
    const authHeader = req.headers;

    if (!authHeader.api_key) {
        return res.status(401).json({ message: 'student not authenticated!' });
    }

    const existingStudent = db.users.find(user => user.api_key === authHeader.api_key)
    if (existingStudent) {
        req.user = existingStudent
        next();
    } else {
        return res.status(401).json({ message: 'student not authenticated!' });
    }
}


module.exports = {
    basicAuth,
    apiKeyAuth
} 