import {
    GETSMURFS_START,
    GETSMURFS_SUCCESS,
    GETSMURFS_FAILED,
    ADDSMURF_START,
    ADDSMURF_SUCCESS,
    ADDSMURF_FAILED
} from '../actions/actions'

const initialState = {
    smurfList: [],
    isLoading: false,
    error: null
};