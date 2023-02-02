var axios = require('axios');
const { examplesIA } = require('../utils/ExamplesIA');
const { parseStats } = require('./parseStats');
//const { tweets } = require('../utils/Tweets')

async function getClasifyCohere(userTimeLine) {

    var tweets = parseTweets(userTimeLine)
    
    var data = JSON.stringify({
        "inputs": tweets,
        "examples": examplesIA,
    })

    var config = {
        method: 'post',
        url: 'https://api.cohere.ai/classify',
        headers: {
            'Authorization': `BEARER ${process.env.COHERE_KEY}`,
            'Content-Type': 'application/json',
            'Cohere-Version': '2022-12-06',
        },
        data: data
    };

    var tweetsClasify = axios(config)
        .then(function (response) {
            const dataCohere = parseStats(response.data.classifications)
            return dataCohere
        })
        .catch(function (error) {
            console.log('error', error);
        });
    return tweetsClasify
}

function parseTweets(tweets) {
    const tweetsArray = tweets.map((tweet) => tweet.text);
    return tweetsArray   
}

module.exports = { getClasifyCohere }
