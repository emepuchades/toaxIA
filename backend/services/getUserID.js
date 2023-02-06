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
            const profileURL = await getImageProfile(userTwitterID) 

            return { timelineUser, profileURL, username }
        })
        .catch(function (error) {
            return { error: 'No existe el usuario' }
        });
    return timeline
}

async function getImageProfile(tweetId) {
    var config = {
        method: 'get',
        url: `https://api.twitter.com/2/users?ids=${tweetId}&user.fields=profile_image_url`,
        headers: {
            'Authorization': `Bearer ${process.env.TWITTER_ACCESS_TOKEN_BEARER}`,
        },
        data: ''
    };

    const image = await axios(config)
        .then(async function (response) {
            const profileImage = response.data.data[0].profile_image_url
            const profileURL = deleteNormalImage(profileImage)

           return profileURL
        })
        .catch(function (error) {
            return { error: 'No existe el usuario' }
        });
    return image
}

function deleteNormalImage(image) {    
    const imageURL = image.replace('_normal', '');
    return imageURL
}

module.exports = { getUserId }
