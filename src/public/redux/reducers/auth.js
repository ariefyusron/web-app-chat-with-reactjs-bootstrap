const initialState = {
  token: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: '',
  userData: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {...state, isLoading: true}
    case 'LOGIN_FULFILLED':
      return {...state, isLoading: false, isSuccess: true, token: action.payload.data.token, userData: action.payload.data.result}
    case 'LOGIN_REJECTED':
      return {...state, isLoading:false, isError:true, error: action.payload.response.data.message}
    default:
      return state;
  }
};

export default authReducer;