import axios from 'axios';

export default function getTimeLine(userTwitter) {
    axios
        .get('http://localhost:4000/api/timeline', {
            params: {
                username: userTwitter,
            },
        })
        .then(response => {
            console.log('response', response.data)
        })
        .catch(error => console.log('error react', error.message))
}