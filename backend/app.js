const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// import blueprint of schema and model
const Post = require('./models/post');

const app = express();

// node-angular -> database name
mongoose.connect(`mongodb+srv://admin:QDGWDwBVOAnk38bB@cluster0-tjm8z.mongodb.net/node-angular?retryWrites=true&w=majority`)
  .then( () => {
    console.log('Connected to Database');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

//parse json data
app.use(bodyParser.json());
//parse urls
app.use(bodyParser.urlencoded({extended: false}));

//since local host and app are being serverd on different ports
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

//POSTS
app.post('/api/posts', (req, res, next) => {
  // const post = req.body;
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // .save() comes with mongoose package to automatically create right query to database
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    }); //good server always responds
  });
});

//GETS
app.get('/api/posts', (req, res, next) => {
  // .find() returns all entries
  // .then() holds results
  Post.find().then(documents => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: documents
      });
    });
});

// DELETES
app.delete(`/api/posts/:id`, (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    res.status(200).json({message: 'Post deleted!' });
  });
});

module.exports = app;
