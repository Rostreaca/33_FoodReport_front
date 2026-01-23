import axios from "axios";

const API_URL = window.ENV?.API_URL;

// 인증이 필요한 요청용 인스턴스
export const authInstance = axios.create({
  baseURL: API_URL, // 기본 url
  headers: {
    "Content-Type": "application/json", // 기본 헤더
  },
});

// 인증이 불필요한 요청용 인스턴스
export const publicInstance = axios.create({
  baseURL: API_URL, // 기본 url
  headers: {
    "Content-Type": "application/json", // 기본 헤더
  },
});

// // 인증 인터셉터 추가
// authInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
