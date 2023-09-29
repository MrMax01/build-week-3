export const SELECT_PROFILE = "SELECT_PROFILE";
export const MY_PROFILE = "MY_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const POST_PICTURE = "POST_PICTURE";
export const UPDATED = "UPDATED";
export const GET_EXPERIENCE_SELECTED = "GET_EXPERIENCE_SELECTED";
export const SEARCH_QUERY = "SEARCH_QUERY";
export const GET_JOBS = "GET_JOBS";
export const ADD_TO_FAVORITES_JOBS = "ADD_TO_FAVORITES_JOBS";
export const REMOVE_FROM_FAVORITES_JOBS = "REMOVE_FROM_FAVORITES_JOBS";
export const addToFavoritesAction = (companySelected) => ({ type: ADD_TO_FAVORITES_JOBS, payload: companySelected });
export const removeFromFavoritesAction = (companySelected) => ({
  type: REMOVE_FROM_FAVORITES_JOBS,
  payload: companySelected,
});

const baseEndPoint = "https://striveschool-api.herokuapp.com/api/profile/";

const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
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
        alert("Errore nel reperimento dei dati experience ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postPictureAction = (data) => {
  return async () => {
    console.log(data);
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/651141923752a80014568769/picture/", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
        },
        body: data,
      });
      return resp.json();
    } catch (error) {
      console.log(error);
    }
  };
};

export const postPictureExperienceAction = (formData) => {
  return async (_, getState) => {
    console.log(formData);
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/651141923752a80014568769/experiences/" +
          getState().experienceSelected.content +
          "/picture",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
          },
          body: formData,
        }
      );
      return resp.json();
    } catch (error) {
      console.log(error);
    }
  };
};

export const postTextPost = (data) => {
  const post = { text: data };
  return async () => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
        },
        body: JSON.stringify(post),
      });
      return resp.json();
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateProfile = (newProfileData) => {
  return {
    type: UPDATE_PROFILE,
    payload: newProfileData,
  };
};

export const pictureForPostsAction = (data, postId) => {
  return async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
        method: "POST",
        body: data,

        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
        },
      });
      if (resp.ok) {
        return resp.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobs = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + getState().query.content, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
        },
      });
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({ type: GET_JOBS, payload: fetchedJobs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getQuery = (queryJobs) => ({ type: SEARCH_QUERY, payload: queryJobs });
