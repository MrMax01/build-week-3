export const SELECT_PROFILE = "SELECT_PROFILE";

export const fetchProfile = () => {
  const baseEndPoint = "https://striveschool-api.herokuapp.com/api/profile/me";
  return (dispatch, getState) =>
    fetch(baseEndPoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
      },
    })
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
