const initialState = {
  token: '',
  isLoading: false,
  isError: false,
  isLogin: false,
  error: '',
  userData: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {...state, isLoading: true}
    case 'LOGIN_FULFILLED':
      return {...state, isLoading: false, isLogin: true, token: action.payload.data.token, userData: action.payload.data.result}
    case 'LOGIN_REJECTED':
      return {...state, isLoading:false, isError:true, error: action.payload.response.data.message}
    case 'LOGOUT':
      return {...state, isLogin: false, token:''}
    default:
      return state;
  }
};

export default authReducer;