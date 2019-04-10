import Axios from "axios"

export const LOAD_CLUBS_START = "LOAD_CLUBS_START";
export const LOAD_CLUBS_SUCCESS = "LOAD_CLUBS_SUCCESS";
export const LOAD_CLUBS_ERROR = "LOAD_CLUBS_START";
export const FILTER = "FILTER";

export const loadClubsStart = () => ({
    type: LOAD_CLUBS_START
});

export const loadClubsSuccess = clubs => ({
    type: LOAD_CLUBS_SUCCESS,
    payload: {clubs}
});

export const loadClubsError = error => ({
    type: LOAD_CLUBS_ERROR,
    payload: {error}
});

export const filter = (clubs) => ({
    type: FILTER,
    payload: {clubs}
});


export function loadClubs() {
    return function action(dispatch) {
        dispatch(loadClubsStart());

        const request = Axios.get("https://places.demo.api.here.com/places/v1/discover/explore;context=Y2F0PWRhbmNlLW5pZ2h0LWNsdWImZmxvdy1pZD02Y2Q1YjdiYi1kMDc2LTVkM2EtOGFjZC04YjkyNTY1MzgzZDJfMTU1MzU2MDg3NzMzOF8wXzc1MDMmb2Zmc2V0PTIwJnNpemU9MjA?at=52.2688736%2C10.5267696&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg")

        return request.then(
            response => dispatch(loadClubsSuccess(response.data.items)),
            err => dispatch(loadClubsError(err))
        );
    }
}