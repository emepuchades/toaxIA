import axios from 'axios';

export default function getTimeLine(userTwitter) {
    axios
        .get(`${import.meta.env.PUBLIC_URL_BACKEND}/api/timeline`, {
            params: {
                username: userTwitter,
            },
        })
        .then(response => {
            console.log('response', response.data)
        })
        .catch(error => console.log('error react', error.message))
}