import React, { useState, useEffect } from 'react'
import axios from 'axios';

function UserTwitter({ userTwitter, setUserTwitter }) {
    const [userTwitterID, setUserTwitterID] = useState('')
    const [trends, setTrends] = useState([])
    const [username, setUsername] = useState('midudev')

    useEffect(() => {

    }, []);


    function getTrends() {
        axios
            .get('http://localhost:4000/api/trends', {
                params: {
                    username: userTwitter,
                },
            })
            .then(response => {
                setTrends(response.data[0].trends)
            })
            .catch(error => console.log(error.message))
    }



    return (
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
                onClick={() => getTrends()}
                className="text-white bg-gradient-to-br from-green-400 to-purple-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Ver
            </button>
        </div>
    )
}

export default UserTwitter