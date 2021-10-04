import axios from 'axios';

const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpcmluYUBnbWFpbC5jb20iLCJuYW1lIjoiSXJpbmEiLCJjcmVhdGVkQXQiOiIyMDIxLTEwLTA0VDA4OjU1OjI4LjE0OFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEwLTA0VDA4OjU1OjI4LjE0OFoiLCJpYXQiOjE2MzMzMzc3Mjh9.mGAKx_BH4eaxFgNMEmygOf6uwJPgdFDl3xS8eZgfMxo';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    Authorization: AUTH_TOKEN,
  },
});

export default instanceAxios;
