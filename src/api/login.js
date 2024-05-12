import http from "@/api/http";

async function socialLogin(code, providerName, stateCode) {
  return http.post(`/login/${providerName}`, {
    authorizationCode: code,
    stateCode: stateCode,
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

export { socialLogin, signup, defaultLogin };
