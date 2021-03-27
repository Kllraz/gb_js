'use strict';

// es5

// function Post(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }

// Post.prototype.edit = function (new_text) {
//     this.text = new_text;
// }

// function AttachedPost(author, text, date) {
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }

// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.consturctor = AttachedPost;

// AttachedPost.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;
// }

// let attachedPostObj = new AttachedPost("Ivan", "volutpat blandit aliquam", "26-03-2021");
// attachedPostObj.makeTextHighlighted();

// console.log(attachedPostObj);


// es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(new_text) {
        this.text = new_text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = true;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let attachedPostObj = new AttachedPost("Ivan", "volutpat blandit aliquam", "26-03-2021");
attachedPostObj.makeTextHighlighted();

console.log(attachedPostObj);