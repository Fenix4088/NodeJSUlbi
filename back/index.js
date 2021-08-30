const express = require('express');
const mongoose = require('mongoose');
const {POST} = require('./post.js')


const PORT = 5001;
const PASSWORD = 'todo';
const DB = `mongodb+srv://todo:${PASSWORD}@cluster0.lxld8.mongodb.net/ulbiTV?retryWrites=true&w=majority`

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body;
        const post = await POST.create({author, title, content, picture})
        res.status(200).json(post);
    } catch (e) {
        res.status(500).json(e);
    }

})

const startApp = async () => {
    try {
        await mongoose.connect(DB);
        app.listen(PORT, () => {
            console.log(`listen port => ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp();


