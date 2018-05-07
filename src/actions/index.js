import axios from 'axios'

export const FETCH_POSTS = "FETCH_POSTS";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';
export function fetchPost() {
    const request = axios.get(`${ROOT_URL}/posts`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}