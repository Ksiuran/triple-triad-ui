import ttClient from "./TT-Client";
import User from "../models/User";
import { userInfo } from "os";

export const register = async (newUser: { username: string, password: string, matchingPassword: string }) => {

  let resp = await ttClient.post('users/registration', newUser);

  if (resp.status == 401) {
    throw resp.data;
  }

  if (resp.status == 201) {
    console.log('User creation success!');
  }

  await ttClient.get(`users/${newUser.username}/addall`);
  let user = await ttClient.post("users/login", {"username": newUser.username, "password": newUser.password})
  return user.data as User;
}

export function getUserFromSession ():(User| null) {

  let stored =  window.sessionStorage.getItem("user_cached");
  if (stored == null || ""){
    return  null;
  }else{
    return JSON.parse(stored);
  }
}