import axios, { AxiosError, AxiosResponse } from "axios";
import Store from "../store";
import router from "../../plugins/router";

export default class AuthService {
  static async register(email: string, password: string): Promise<void> {
    AuthService.sendRequest("/user/register", email, password);
  }

  static async login(email: string, password: string): Promise<void> {
    AuthService.sendRequest("/user/login", email, password);
  }

  private static sendRequest(url: string, email: string, password: string) {
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((response: AxiosResponse) => {
        Store.userJwt = response.data;
        localStorage.setItem("jwt", Store.userJwt!);
        router.push("/mainPage");
      })
      .catch((err: AxiosError) => {
        console.log("WHY: ", err.response);
      });
  }
}
