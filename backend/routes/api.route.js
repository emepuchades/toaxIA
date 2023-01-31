const router = require('express').Router()
const Twitter = require('twitter')
var axios = require('axios');


const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
})

router.get('/trends', async (req, res, next) => {
  const username = req.query.username
  console.log(req.query.username)

  var config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.twitter.com/2/users/by/username/${username}`,
    headers: {
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAADI6lgEAAAAAWaCE76tbOnBtJMwb%2FXyJ2sWwDlE%3D8C8nGeV5vMMb8xk7RR43aCBIYyeDXggVICEImzn8eoUugcYjTA',
      'Cookie': 'guest_id=v1%3A167499241100445730',
      'Content-Type': 'text/plain'
    },
    data: ''
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.data.id));
    })
    .catch(function (error) {
      console.log(error);
    });

})

module.exports = router
