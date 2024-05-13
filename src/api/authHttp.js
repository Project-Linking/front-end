import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";
import router from "@/plugins/router";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 3000,
});

async function reissueAccessToken() {
  instance
    .post("/token")
    .then((res) => {
      console.log(res);
      console.log(res.data.data.userToken.accessToken);
      useAuthStore().$patch({
        accessToekn: res.data.data.userToken.accessToken,
      });
    })
    .catch(() => {
      window.location.href = "http://localhost:3000/";
    });
}

instance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore().$state.accessToken;
    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const code = error.response.data.errorStatus.code;
    console.log(code);
    if (code === "JWT-001" || code === "JWT-002" || code === "USER-008") {
      // JWT재발급
      reissueAccessToken();
      //   const response = await axios.request(error.config);
      //   return response;
    } else if (code === "JWT-003") {
      router.push("/login");
    }
  }
);

export default instance;
