export const SELECT_PROFILE = "SELECT_PROFILE";

export const fetchProfile = (userId = "me") => {
  const baseEndPoint = "https://striveschool-api.herokuapp.com/api/profile/";
  return (dispatch, getState) =>
    fetch(baseEndPoint + userId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((profileObj) => {
        dispatch({ type: SELECT_PROFILE, payload: profileObj });
      })
      .catch((err) => console.log(err));
};
