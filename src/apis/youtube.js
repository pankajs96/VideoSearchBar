import axios from "axios";
//import q from 'q';

const KEY = "AIzaSyCy7WtlTYwgmGR6QJBfIOWK5Dnh11c3OHc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 10,
    key: KEY
  }
});
