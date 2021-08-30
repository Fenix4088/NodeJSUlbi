const {Schema, model} = require('mongoose');

const Post = new Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    picture: {type: String}
});

const postSchema = model('Post', Post);

module.exports = {POST: postSchema};