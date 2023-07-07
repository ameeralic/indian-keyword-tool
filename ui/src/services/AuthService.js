import { useCookies } from "vue3-cookies";
import axios from "axios";
const { cookies } = useCookies();

export async function sendLogin(loginData) {
    const {data} = await axios.post(`/api/auth/login`, loginData);
    if (data.remember_me) {
        cookies.set("jwt", data.token, "48h");
      } else {
        cookies.set("jwt", data.token, "1h");
      }
      return await data
}


// export async function login(loginFormDetails) {
//     const response = await axios.post(api_parent + "login", loginFormDetails);
//     if (loginFormDetails.keepLoggedIn) {
//       cookies.set("jwt", response.data.jwt, "10d");
//     } else {
//       cookies.set("jwt", response.data.jwt, "1h");
//     }
//     return response.data;
//   }