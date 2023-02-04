var axios = require('axios');
const { getClasifyCohere } = require('./getClasify');

async function getTimeLine(idUserName) {
    var config = {
        method: 'get',
        url: `https://api.twitter.com/2/users/${idUserName}/tweets?max_results=10`,
        headers: {
            'Authorization': `Bearer ${process.env.TWITTER_ACCESS_TOKEN_BEARER}`,
        }
    };

    var timeline = await axios(config)
        .then(async function (response) {
                const clasyCohere = await getClasifyCohere(response.data.data)
                return clasyCohere
        })
        .catch(function (error) {
            return { error: 'No se puede acceder a una cuenta candado' };
        });

    return timeline
}

module.exports = { getTimeLine }
