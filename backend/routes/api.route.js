const router = require('express').Router()
var axios = require('axios');


router.get('/timeline', async (req, res, next) => {
  const username = req.query.username
  console.log('username', req.query.username)

  var config = {
    method: 'get',
    url: `https://api.twitter.com/2/users/by/username/${username}`,
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_ACCESS_TOKEN_BEARER}`,
    },
    data: ''
  };

  const timeline = await axios(config)
    .then(async function (response) {
      const userTwitterID = response.data.data.id
      const timelineUser = await getTimeLine(userTwitterID)
      return timelineUser
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log('timelineeeeeeeeeeeeeee', timeline)

  res.send(timeline)

})

async function getTimeLine(idUserName) {
  var config = {
    method: 'get',
    url: `https://api.twitter.com/2/users/${idUserName}/tweets?max_results=10`,
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_ACCESS_TOKEN_BEARER}`,
    }
  };

  var timeline = await axios(config)
    .then(function (response) {
      return response.data.data
    })
    .catch(function (error) {
      console.log(error);
    });

  return timeline
}

module.exports = router
