import React, { useState, useEffect } from 'react'
import getTimeLine from '../utils/Functions';

function UserTwitter({ userTwitter, setUserTwitter }) {
    const [trends, setTrends] = useState([])

    useEffect(() => {
    }, []);


    function updateTimelines() {
        setTrends(getTimeLine(userTwitter))
    }


    return (
        <div>
            <h1>Introduce tu usuario de twitter</h1>
            {trends ? console.log(trends) : null}
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
    )
}

export default UserTwitter