"use strict";
var Post = (function () {
    function Post(id, title, category, body, author) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.body = body;
        this.author = author;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=Post.js.map