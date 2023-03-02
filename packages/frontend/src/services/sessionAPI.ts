import http from "../http-common";

export const sessionApiService = {
  loginUser(email: string, password: string) {
    return http.post(`session/login`, { email: email, password: password });
  },
};
