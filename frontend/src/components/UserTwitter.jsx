import React, { useState, useEffect } from 'react'
import ClassifyIA from './ClassifyIA';
import axios from 'axios';
import UserInput from './userInput';
import Faq from './Faq';

function UserTwitter({ userTwitter, setUserTwitter }) {
    const [timeline, setTimeline] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        error !== '' ?
            setError('')
            : null
    }, [userTwitter]);

    async function updateTimelines() {
        if (timeline.length > 0) { setTimeline([]) } else { setError('') }
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
                    setTimeline(response.data)
            })
            .catch(error => console.log('error react', error.message))

        setLoading(false)
    }

    return (
        <div className="container-dashboard">
            <UserInput
                userTwitter={userTwitter}
                setUserTwitter={setUserTwitter}
                error={error}
                loading={loading}
                updateTimelines={updateTimelines}
            />
            {timeline.length > 0 ?
                !loading ?
                    <div>
                        <ClassifyIA
                            timeline={timeline}
                            error={error}
                        />
                    </div>
                    : null
                : null}

            <Faq />
        </div>
    )
}

export default UserTwitter