const db = require('../db/students.js')

const users = db.users


const accessRoles = (roles) => {
    return (req, res, next) => {
        const userDetails = req.body
    // const foundUser = users.find(user => user.username == userDetails.username)

    
    if (!userDetails) {
        res.send("user details required")
    }
    if (userDetails.role == roles) {
        next()
    }
    res.send("user not authorized")
    }
}


module.exports = {accessRoles}