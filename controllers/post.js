const Post = require('../models/post');

exports.createPost = (req, res, next) => {
    // get post data from request
    const title = req.body.title;
    const content = req.body.content;
    // create new post instance 
    const post = new Post({
        title: title,
            content: content
    })
    // save instance to database
    post
        .save()
        .then(postSaved => {
            res.status(201).json({
                message: 'Post created successfully!',
                post: postSaved
            });
        })
        .catch(err => console.log('err', err));
}

exports.getPosts = (req, res, next) => {
    // return array of exisiting posts
    Post.find().then(foundPosts => {
        res.json({
            message: "All posts",
            posts: foundPosts
        });
    });
}