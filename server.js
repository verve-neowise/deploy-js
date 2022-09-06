const express = require('express')
const cors = require('cors')

const { PrismaClient } = require('@prisma/client')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

app.post('/users', async (req, res) => {
    
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            surname: req.body.surname
        }
    })

    res.json({
        message: "User created.",
        user
    })
})

app.listen(8080, () => console.log('Server is running on localhost:8080'))