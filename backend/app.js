const express = require('express');

const app = express();

//since local host and app are being serverd on different ports
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/posts', (req, res, next) => {
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
