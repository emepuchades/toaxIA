import React, { useState, useEffect } from 'react'
import ResultIA from '../ResultIA/ResultIA';
import axios from 'axios';
import SearchUser from '../SearchUser/SearchUser';

function AnalyzeUser({ userTwitter, setUserTwitter }) {
    const [timeline, setTimeline] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        error !== '' ?
            setError('')
            : null
    }, [userTwitter]);

    async function updateTimelines() {
        if (timeline.length > 0) { setTimeline({}) } else { setError('') }
        setLoading(true)

        await axios
            .get(`${import.meta.env.PUBLIC_URL_BACKEND}/api/timeline`, {
                params: {
                    username: userTwitter,
                },
            })
            .then(response => {
                response.data.error ?
                    setError(response.data.error)
                    :
                    setTimeline(({
                        ...response.data
                    }))
            })
            .catch(error => console.log('error react', error.message))

        setLoading(false)
    }

    return (
        <div className="container-dashboard">
            <SearchUser
                userTwitter={userTwitter}
                setUserTwitter={setUserTwitter}
                error={error}
                loading={loading}
                updateTimelines={updateTimelines}
            />
            
            {Object.keys(timeline).length !==  0 ?
                !loading ?
                    <div className="self-center width-60">
                        <ResultIA
                            data={timeline}
                        />
                    </div>
                    : null
                : null}

        </div>
    )
}

export default AnalyzeUser