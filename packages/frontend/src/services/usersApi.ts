import http from "../http-common";
import { User } from "../../../shared/types/user";

export const UsersApiService = {
  createUser(user: User) {
    return http.post(`users/create`, user);
  },
};
