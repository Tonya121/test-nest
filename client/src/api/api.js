import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const res = error.response;
    console.log(`Request error! Status: ${res.status},
      message: ${typeof res.data === "string" ? res.data : JSON.stringify(res.data)
          },
      from: ${res.config.url},
      method: ${res.config.method}`);
    if (res.status === 503) {
      return alert("Error\nSomething went wrong\nPlease try again later");
    }
    return Promise.reject(res);
  }
);

export default instance;