exports.getPosts = (req, res, next) => {
    // return an array of dummy posts
    res.status(200).json({
        posts: [
            {
                title: 'First Post',
                content: 'This is the first post!'
            }
        ]
    })
};

exports.createPost = (req, res, next) => {
    // get post data from request
    const title = req.body.title;
    const content = req.body.content;
    // create post with dynamic id
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    });
};