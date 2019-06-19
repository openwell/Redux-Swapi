// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetchChars = () => dispatch => {
    dispatch({type: FETCHING, payload:true})
      axios.get('https://swapi.co/api/people')
      .then(res => {
        dispatch(success(res.data.results))
        dispatch({type: FETCHING, payload:false})

      })
      .catch(err => {
        dispatch(failure(err.message))
        dispatch({type: FETCHING, payload:false})
      });
};
export const success = (res) => {
  return {
    type: SUCCESS,
    payload: res
  };
};
export const failure = (err) =>{
  return {
    type: FAILURE,
    payload: err
  }
}
