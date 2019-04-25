import axios from "axios";

const DEV_BASE_USER = "https://titan-devs.herokuapp.com/api/v1";
const PROD_BASE_USER = "https://titan-devs.herokuapp.com/api/v1";
export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? PROD_BASE_USER : DEV_BASE_USER,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzcG9pci5tdXJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJlc3B5IiwiaWQiOiJmOTlhMmVlNS1kNzQzLTQxNDYtYjc3Yy1kM2Y3ZDEzNDhmMzUiLCJpYXQiOjE1NTYwMzExODV9.Q-VGYcZAayXtEmuSnzzQ8z13Qch5grY4a201R_lAVe8",
    "cache-control": "no-cache"
  }
});
