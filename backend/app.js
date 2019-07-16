const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  }); //good server always responds
});

//GETS
app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '1',
      title: 'Yo',
      content: 'yeah!'
    },
    {
      id: '2',
      title: 'Yos',
      content: 'yeahs!'
    },

  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
