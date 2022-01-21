import appClient from './app-client';
import ttClient from './TT-Client';

export const authenticate = async (credentials: { username: string, password: string }) => {

  let resp = await ttClient.post("/users/login", credentials);
  
  if (resp.status == 401) {
    throw resp.data;
  }

  if (resp.status == 200) {
    console.log('Authentication success!');
  }
  return resp.data;

}
