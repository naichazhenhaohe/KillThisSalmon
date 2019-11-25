import axios from "axios";

axios.defaults.baseURL = "http://somewhere.com";

axios.interceptors.response.use(
  res => {
    if (res.status >= 400 && res.status < 500) {
      // 对返回状态码为 4xx 的请求统一处理
      console.log(`code: ${res.status}, request failed!`);
      window.location.href = decodeURI(
        `${window.location.protocol}//${window.location.host}/404.html`
      );
    } else {
      return res;
    }
  },
  err => {
    console.log(err);
  }
);

export default axios;
