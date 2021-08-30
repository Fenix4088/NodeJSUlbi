const Router = require('express');
const {POST} = require("./post.js");
const PostController = require('./postController');

const postsRouter = new Router();

postsRouter.get('/posts/:id?', PostController.getPost);

postsRouter.post('/posts', PostController.create);

postsRouter.put('/posts', PostController.update);

postsRouter.delete('/posts/:id?', PostController.delete)

module.exports = postsRouter;