const {POST} = require("./post.js");
const PostService = require('./postService');

class PostController {
    async create(req, res) {
        try {
            console.log(req.files)
            const {author, title, content, picture} = req.body;
            const post = await PostService.create({author, title, content}, req.files.picture)
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getPost(req, res) {
        try {
            const {id} = req.query;
            if (!id) {
                const allPosts = await PostService.getPost();
                return res.status(200).json(allPosts);
            }
            try {
                const postById = await PostService.getPost(id);
                return res.status(200).json(postById);
            } catch (e) {
                return res.status(404).json({message: 'Invalid ID!'})
            }

        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async delete(req, res) {
         try {
            const {id} = req.query;
            try {
                await PostService.delete(id);
                return res.status(200).json({message: 'Post was deleted'});
            } catch(e) {
                return res.status(404).json({message: 'Invalid Id'});
            }

        } catch(e) {
            return res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const post = req.body;

            if (!post._id) return res.status(404).json({message: 'Invalid ID!'});

            try {
                const updatedPost = await PostService.update(post);
                return res.status(200).json({message: 'Post was updated', updatedPost});
            } catch(e) {
                return res.status(404).json({message: 'Invalid ID!'});
            }

        } catch (e) {
            return res.status(500).json(e);
        }
    }
}


module.exports = new PostController();