import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    users.push(req.body)
    res.json({
        message: "User created.",
        user: req.body
    })
})

app.listen(8080, () => console.log('Server is running on localhost:8080'))