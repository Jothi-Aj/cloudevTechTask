import { GET_DATA } from './types';
import listData from '../../data.json';

export function setDataToStore(data) {
  return {
    type: GET_DATA,
    data,
  };
}

export const getDataFromJSON = () => dispatch => {
    dispatch(setDataToStore(listData))
};