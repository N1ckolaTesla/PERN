require('dotenv').config()
const express = require('express')
const app = express()
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch(err) {
        console.log(err)
    }
}

start()
