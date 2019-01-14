import axios from 'axios';

export function login(data){
  return {
    type: 'LOGIN',
    payload: axios.post('http://localhost:5000/login',{
      username:data.username,
      password:data.password
    })
  }
}