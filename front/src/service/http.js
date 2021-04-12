import api from '../utils/api'

export function getEvents() {
  return new Promise( (resolve, reject) => {
    api.get('events')
    .then( response => {
      resolve(response.data.events)
    })
    .catch( error => {
      reject({message: error.message})
    })
  });
}