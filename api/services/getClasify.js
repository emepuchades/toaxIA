var axios = require('axios');
const { parseStats } = require('./parseStats');

async function getClasifyCohere(userTimeLine) {

    var tweets = parseTweets(userTimeLine)
    var examplesCohere = parseExamples(process.env.EXAMPLES_COHERE)

    var data = JSON.stringify({
        "inputs": tweets,
        "examples": examplesCohere,
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

function parseExamples(examplesIA) {
    var result = [];

    for (let i = 0, a = examplesIA.split('|'); i < a.length; i += 2) {
        var text = a[i]
        var label = a[i + 1];
        result.push({ text, label });
    }    
    return result;
}

module.exports = { getClasifyCohere }
