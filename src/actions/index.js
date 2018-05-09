import axios from 'axios'

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=mushroom33';
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/post${id}${API_KEY}`)
    
    return {
        type: FETCH_POST,
        palyload: request
    }
}