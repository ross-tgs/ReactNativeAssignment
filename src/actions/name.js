import { ADD_NAME } from './types';

export const changeName = (name) => {
  return {
    type: ADD_NAME,
    data: name,
  }
};