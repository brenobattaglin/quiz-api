const express = require('express')
const router = express.Router()
const Question = require('./models/Question')

// get all quiz questions
router.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

// get one quiz question
router.get('/questions/:id', (req, res) => {

})

// create one quiz question
router.post('/questions', async (req, res) => {
    try {
        const { description } = req.body
        const { alternatives } = req.body

        const question = await Question.create({
            description,
            alternatives
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

// update one quiz question
router.put('/questions/:id', (req, res) => {

})

// delete one quiz question
router.delete('/questions/:id', (req, res) => {

})

// this one is just a test
router.get('/', (req, res) => {
    res.send('It\'s working')
})

module.exports = router