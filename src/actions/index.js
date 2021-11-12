import * as actionTypes from './types';

/*User Action Types*/
export  const setUser=user=>{
  return {
    type:actionTypes.SET_USER,
    payload:{
      currentUser:user
    }
  };
}


export  const clearUser=()=>{
  return {
    type:actionTypes.CLEAR_USER
  };
}

export const clearSpinner=()=>{
  return {
    type:actionTypes.CLEAR_SPINNER
  };
}

/*Channel Action Types */
export const setCurrentChannel=channel=>{
  return{
    type:actionTypes.SET_CURRENT_CHANNEL,
    payload:{
      currentChannel:channel
    }
  };
}
