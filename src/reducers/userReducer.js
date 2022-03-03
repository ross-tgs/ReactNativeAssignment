///@ts-check

import { ADD_NAME } from '../actions/types'

const initialState = {
  name: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, name: action.data };
    default:
      return state;
  }
}

export default userReducer;