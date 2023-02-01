import axios from 'axios';

export default async function getTimeLine({userTwitter, setTimeline, setError}) {
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
}