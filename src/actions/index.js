import axios from 'axios';

export const FETCH_VEHICLES = 'fetch_vehicles';
export const FETCH_VEHICLE = 'fetch_vehicle'
export const CREATE_VEHICLE = 'create_vehicle';
export const DELETE_VEHICLE = 'delete_vehicle';

export const FETCH_VALETS = 'fetch_valets';
export const FETCH_VALET = 'fetch_valet'
export const CREATE_VALET = 'create_valet';
export const DELETE_VALET = 'delete_valet';


const ROOT_URL = 'http://localhost:5555/api';

export function fetchVehicles() {
  const request = axios.get(`${ROOT_URL}/vehicles`);

  return {
    type: FETCH_VEHICLES,
    payload: request
  };
}

export function fetchVehicle(id) {
  const request = axios.get(`${ROOT_URL}/vehicle/${id}`);

  return {
    type: FETCH_VEHICLE,
    payload: request
  };
}

export function createVehicle(values, cb) {
  const request = axios.post(`${ROOT_URL}/vehicles`, values)
  .then(() => cb());

  return {
    type: CREATE_VEHICLE,
    payload: request
  };
}

export function deleteVehicle(id, cb) {
  const request = axios.delete(`${ROOT_URL}/vehicle/${id}`)
  .then(() => cb());

  return {
    type: DELETE_VEHICLE,
    payload: id
  };
}


export function fetchValets() {
  const request = axios.get(`${ROOT_URL}/valets`);

  return {
    type: FETCH_VALETS,
    payload: request
  };
}

export function fetchValet(id) {
  const request = axios.get(`${ROOT_URL}/valet/${id}`);

  return {
    type: FETCH_VALET,
    payload: request
  };
}

export function createValet(values, cb) {
  const request = axios.post(`${ROOT_URL}/valets`, values)
  .then(() => cb());

  return {
    type: CREATE_VALET,
    payload: request
  };
}

export function deleteValet(id, cb) {
  const request = axios.delete(`${ROOT_URL}/valet/${id}`)
  .then(() => cb());

  return {
    type: DELETE_VALET,
    payload: id
  };
}
