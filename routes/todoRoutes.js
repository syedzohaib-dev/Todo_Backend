import express from "express";

const router = express.Router()


router.get('/', (req, res) => {
    res.send('all post for you')
})

router.get('/:todoId', (req, res) => {
    res.send('single post for you accourting to your todoId')
})

// create a todo

router.post('/:todoId', (req, res) => {
    res.send('Post Created Successfully')
})

// update a todo post


router.put('/:todoId', (req, res) => {
    res.send('Post Update Successfully accor to Your Id')
})  

// delete the post

router.delete('/:todoId', (req, res) => {
    res.send('Post Delete Successfully accor to Your Id')
})

// Delete all the post

router.delete('/', (req, res) => {
    res.send('All Post Delete Successfully')
})

export default router;