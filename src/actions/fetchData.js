import axios from "axios";
import {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataError
} from "./action";

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchDataRequest());
        axios
            .get(
                "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49"
            )
            .then(response => {
                dispatch(fetchDataSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            });
    };
}