import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS_SMURFS = 'SUCCESS_SMURFS';
export const FAILURE_SMURFS = 'FAILURE_SMURFS';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: SUCCESS_SMURFS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE_SMURFS, payload: err.message }));
}

export const addSmurf = state => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', {
      name: state.name,
      age: state.age,
      height: state.height
    })
    .then(res => dispatch({ type: SUCCESS_SMURFS, payload: res.data}));
}
