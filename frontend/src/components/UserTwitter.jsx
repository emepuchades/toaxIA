import React, { useState, useEffect } from 'react'
import ClassifyIA from './ClassifyIA';
import axios from 'axios';

function UserTwitter({ userTwitter, setUserTwitter }) {
    const [timeline, setTimeline] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function updateTimelines() {
        if (timeline.length > 0) { setTimeline([]) } else { setError('')}
        
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

        setTimeout(() => {
            setLoading(true)
        }, 1000);
    }

    return (
        <div>
            <div>
                <h1>Introduce tu usuario de twitter</h1>
                <input
                    type="text"
                    value={userTwitter}
                    onChange={(e) => setUserTwitter(e.target.value)}
                    placeholder='introduce el usuario de tu twitter'
                />
                <button
                    type="button"
                    onClick={() => updateTimelines()}
                    className="text-white bg-gradient-to-br from-green-400 to-purple-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Ver
                </button>
            </div>
            {timeline.length > 0 || error !== '' ?
                loading ?
                    <div>
                        <ClassifyIA
                            timeline={timeline}
                            error={error}
                        />
                    </div>  
                    : <p>Loading</p>
                : null}

        </div>
    )
}

export default UserTwitter