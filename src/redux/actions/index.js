export const SELECT_PROFILE = "SELECT_PROFILE";
export const MY_PROFILE = "MY_PROFILE";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_EXPERIENCE = "GET_EXPERIENCE";

// const baseEndPoint = "https://striveschool-api.herokuapp.com/api/profile/";
const baseEndPoint = "https://barbie-linkedin.cyclic.cloud/api/profile/";
const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
    team: "team-2",
  },
};
export const fetchProfile = (userId = "me") => {
  return (dispatch, getState) =>
    fetch(baseEndPoint + userId, headers)
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

export const fetchMyProfile = () => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    try {
      const response = await fetch(baseEndPoint + "me", headers);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: MY_PROFILE, payload: data });
        dispatch({ type: LOADING, payload: false });
      } else {
        dispatch({ type: ERROR, payload: true });
        dispatch({ type: LOADING, payload: false });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: ERROR, payload: true });
    }
  };
};

export const GET_PERSONE_ASIDE = "GET_PERSONE_ASIDE";
export const getPersoneAside = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(baseEndPoint, headers);
      if (resp.ok) {
        let fetchedPersoneAside = await resp.json();
        dispatch({ type: GET_PERSONE_ASIDE, payload: fetchedPersoneAside });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati personeAside ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperience = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + getState().profile.content._id + "/experiences",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
          },
        }
      );
      if (resp.ok) {
        let myExperienceFetched = await resp.json();
        dispatch({ type: GET_EXPERIENCE, payload: myExperienceFetched });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati personeAside ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
