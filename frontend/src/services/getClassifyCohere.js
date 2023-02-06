import axios from 'axios';

const getClassyfiIA = async (userTwitter) => {
    try {
        const response = await axios.get(`${import.meta.env.PUBLIC_URL_BACKEND}/api/getClassiy`, {
            params: {
                username: userTwitter,
            },
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.error(err)
        return err;
    }
}

export default getClassyfiIA;