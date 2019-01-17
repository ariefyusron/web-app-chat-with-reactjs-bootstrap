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

export function logout(){
  return {
    type: 'LOGOUT',
    payload: false
  }
}

export function auth(data){
  return {
    type: 'AUTH',
    payload: data
  }
}