const express = require('express');
const mongoose = require('mongoose');
const postsRouter = require("./router");
const fileUpload = require('express-fileupload');


const PORT = 5001;
const PASSWORD = 'todo';
const DB = `mongodb+srv://todo:${PASSWORD}@cluster0.lxld8.mongodb.net/ulbiTV?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/', postsRouter);

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


