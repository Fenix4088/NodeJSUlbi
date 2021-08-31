const {POST} = require("./post.js");
const FileService = require('./fileService.js');

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture);
        return await POST.create({...post, picture: fileName});
    }

    async getPost(id) {
        if (!id) return POST.find();

        return POST.findById(id);
    }

    async delete(id) {
        return POST.findByIdAndDelete(id);
    }

    async update(post) {
        return POST.findByIdAndUpdate(post._id, post, {new: true});
    }
}
console.log("hello");

module.exports = new PostService();