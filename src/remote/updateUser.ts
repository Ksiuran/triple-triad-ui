import NewCard from "../models/NewCard";
import ttClient from "./TT-Client";

export default async function updateUser(props: any) {

  let resp = await ttClient.get(`users/get/${props.aUser.username}`);

  if (resp.status == 401) {
    throw resp.data;
  }

  if (resp.status == 201) {
    console.log('User Updated');
  }

    props.setAUser(resp.data);
    window.sessionStorage.setItem("user_cached", JSON.stringify(resp));
 
}
