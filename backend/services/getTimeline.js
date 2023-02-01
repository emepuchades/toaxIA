var axios = require('axios');

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

module.exports = { getTimeLine }
