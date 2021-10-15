import axios from 'axios';

const KEY = 'AIzaSyBaN85VbRn071piw5xL6id0xigM03QBknk';

export default axios.create ({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});