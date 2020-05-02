import axios from "axios";

export const GETSMURFS_START = "GETSMURFS_START";
export const GETSMURFS_SUCCESS = "GETSMURFS_SUCCESS";
export const GETSMURFS_FAILED = "GETSURFS_FAILED";

export const ADDSMURF_START = "ADDSMURF_START";
export const ADDSMURF_SUCCESS = "ADDSMURF_SUCCESS";
export const ADDSMURF_FAILED = "ADDSMURF_FAILED";

export function getSmurfs() {
  return (dispatch) => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: GETSMURFS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GETSMURFS_FAILED, payload: err.response.data });
      });
  };
}

export function addSmurf(payload){
    return(dispatch) => {
        dispatch({type: ADDSMURF_START})
        
        axios.post('http://localhost:3333/smurfs', payload)
        .then((res) => {
            console.log(addSmurf)
            dispatch ({type: ADDSMURF_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: ADDSMURF_FAILED, payload: err.response.data})
        })
    }
}
