import { useState, useEffect } from 'react'
import axios from 'axios';
import Tweets from '../utils/Tweets';
import { examplesIA } from '../utils/ExamplesIA';

function ClassifyIA({ userTwitter }) {
    const [classify, setClassify] = useState([]);
    const [examples, setExamples] = useState(examplesIA);
    const [tweets, setTweets] = useState(Tweets);

    useEffect(() => {
    }, []);

    async function cohereIA() {
        var data = JSON.stringify({
            "inputs": tweets,
            "examples": examples,
        })

        var config = {
            method: 'post',
            url: import.meta.env.PUBLIC_URL_COHERE,
            headers: {
                'Authorization': `BEARER ${import.meta.env.PUBLIC_API_COHERE}`,
                'Content-Type': 'application/json',
                'Cohere-Version': '2022-12-06',
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setClassify(response.data.classifications)
            })
            .catch(function (error) {
                console.log('error', error);
            });
    }

    return (
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div>            {
                userTwitter !== '' ?
                    classify ?
                        classify.map(item => {
                            return (
                                <div key={item.id}>
                                    <p>{item.input}</p>
                                    <p>{item.prediction}</p>
                                </div>
                            )
                        })
                        : null
                    : null
            }
            </div>
        </div>
    )
}

export default ClassifyIA
