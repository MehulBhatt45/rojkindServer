var express = require('express');
var router = express.Router();
var blogController = require('../controller/newsBlog.controller')

router.post('/blog/addBlog', blogController.addBlog);
router.get('/blog/getBlogs', blogController.getBlogs);
router.get('/blog/getBlogById/:blogId', blogController.getBlogById);
router.post('/blog/commentOnBlog', blogController.commentOnBlog);
router.get('/blog/getCommentsOfBlogs/:blogId', blogController.getCommentsOfBlogs);


module.exports = router;