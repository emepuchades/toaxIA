var axios = require('axios');
const { getTimeLine } = require('./getTimeline');

 async function getUserId(username) {
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
            return { error: 'No existe el usuario' }
        });
    return timeline    
}

module.exports = { getUserId }
