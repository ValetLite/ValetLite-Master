import _ from 'lodash';
import { FETCH_VEHICLES, FETCH_VEHICLE, DELETE_VEHICLE } from '../actions';

export default function (state = {}, action){
    switch (action.type) {
      case DELETE_VEHICLE:
        return _.omit(state, action.payload);
      case FETCH_VEHICLE:
        return { ...state, [action.payload.data.id]: action.payload.data };
      case FETCH_VEHICLES:
        return _.mapKeys(action.payload.data, 'id');
      default:
        return state;
    }
  }
