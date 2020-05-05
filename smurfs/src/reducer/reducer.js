import {
  GETSMURFS_START,
  GETSMURFS_SUCCESS,
  GETSMURFS_FAILED,
  ADDSMURF_START,
  ADDSMURF_SUCCESS,
  ADDSMURF_FAILED
} from './../actions/actions'

const initialState = {
  smurfList: [],
  isLoading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GETSMURFS_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GETSMURFS_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        smurfList: action.payload
      };
    }
    case GETSMURFS_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case ADDSMURF_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ADDSMURF_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        smurfList: action.payload
      };
    }
    case ADDSMURF_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    default:
      return state;
  }
}
