import _ from 'lodash';
import { FETCH_VEHICLES, FETCH_VEHICLE, DELETE_VEHICLE, FETCH_VALETS, FETCH_VALET, DELETE_VALET } from '../actions';

export default function (state = {}, action){
    switch (action.type) {
      case DELETE_VEHICLE:
        return _.omit(state, action.payload);
      case FETCH_VEHICLE:
        return { ...state, [action.payload.data.id]: action.payload.data };
      case FETCH_VEHICLES:
        return _.mapKeys(action.payload.data, 'id');
      case DELETE_VALET:
        return _.omit(state, action.payload);
      case FETCH_VALET:
        return { ...state, [action.payload.data.id]: action.payload.data };
      case FETCH_VALETS:
        return _.mapKeys(action.payload.data, 'id');
      default:
        return state;
    }
  }
