import axios from 'axios';

const KEY = 'AIzaSyCvdwUAui9JmWRugoCS-uraGD-2b0DpNA0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});



