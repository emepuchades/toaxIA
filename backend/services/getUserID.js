var axios = require('axios');
const { getTimeLine } = require('./getTimeline');
const { getClasifyCohere } = require('./getClasify');

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
            getClasifyCohere()
            return timelineUser
        })
        .catch(function (error) {
            console.log(error);
        });
    return timeline    
}

module.exports = { getUserId }
