import http from "@/api/http";

async function socialLogin(code, providerName, stateCode) {
  return http.post(`/login/${providerName}`, {
    authorizationCode: code,
    stateCode: stateCode,
  });
}

export { socialLogin };
