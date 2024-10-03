import axios from 'axios';

export const baseurl = ProcessingInstruction.env.API_URL;
export const axiosAuth = axios.create({
  baseURL: baseurl,
  headers: {
    'Content-Type': 'application/json'
  }
});
axiosAuth.interceptors.request.use(
  (request) => {
    const access = localStorage.getItem('access');
    if (access) {
      if (request.headers) {
        request.headers['Authorization'] = `Bearer ${access}`;
      }
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.AxiosRequestConfig;
    if (error.response.status === 401 && !prevRequest.sent) {
      prevRequest.sent = true;
      await refreshAccessToken();
      prevRequest.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'access'
      )}`;
      return axiosAuth(prevRequest);
    }
    return Promise.reject(error);
  }
);

function checkRefreshTokenExist() {
  if (localStorage.getItem('refresh') === null) {
    throw Error('توکن یافت نشد');
  }
}

export async function refreshAccessToken() {
  try {
    checkRefreshTokenExist();
    const { data } = await axios.post(baseurl + '/refresh', {
      refresh: localStorage.getItem('refresh')
    });
    localStorage.setItem('access', data.access);
    return data;
  } catch (error) {
    if (window.location.href !== '/profile') {
      window.location.href = '/profile';
    }
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    throw error;
  }
}
