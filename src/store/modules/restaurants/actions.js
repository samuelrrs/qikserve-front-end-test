export const FETCH_RESTAURANT_REQUEST = "FETCH_RESTAURANT_REQUEST";
export const FETCH_RESTAURANT_SUCCESS = "FETCH_RESTAURANT_SUCCESS";
export const FETCH_RESTAURANT_FAILURE = "FETCH_RESTAURANT_FAILURE";

export const fetchRestaurantsRequest = () => ({
  type: FETCH_RESTAURANT_REQUEST,
});

export const fetchRestaurantsSuccess = (restaurantData) => ({
  type: FETCH_RESTAURANT_SUCCESS,
  payload: restaurantData,
});

export const fetchRestaurantsFailure = (error) => ({
  type: FETCH_RESTAURANT_FAILURE,
  payload: error,
});
