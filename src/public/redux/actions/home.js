import axios from 'axios';

export function users(token){
  return {
    type: 'USERS',
    payload: axios.get('http://192.168.0.40:5000/users',{
      headers:{
        Authorization:'Bearer '+token
      }
    })
  }
}

export function chat(id,token){
  return {
    type: 'CHAT',
    payload: axios.get('http://192.168.0.40:5000/show/'+id,{
      headers:{
        Authorization:'Bearer '+token
      }
    })
  }
}

export function sendChat(id,data,token){

  axios.defaults.headers.common['Authorization'] = 'Bearer '+token

  return {
    type: 'SEND_CHAT',
    payload: axios.post('http://192.168.0.40:5000/send/'+id,{
      chat: data.chat
    })
  }
}

export function setUser(id){
  return {
    type:'SET_USER',
    payload: id
  }
}