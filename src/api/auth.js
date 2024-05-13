import http from "@/api/http";
import authHttp from "@/api/authHttp";

async function socialLogin(code, providerName) {
  return http.post(`/login/${providerName}`, {
    authorizationCode: code,
  });
}

async function signup(id, pw, nickname) {
  return http.post("/sign-up", {
    loginId: id,
    password: pw,
    nickname: nickname,
  });
}

async function defaultLogin(id, pw) {
  return http.post("/login", {
    loginId: id,
    password: pw,
  });
}

async function logout() {
  return authHttp.get("/logout");
}

export { socialLogin, signup, defaultLogin, logout };
