export const GET_PERSONE_ASIDE = "GET_PERSONE_ASIDE";
export const getPersoneAside = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authotization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNDE5MjM3NTJhODAwMTQ1Njg3NjkiLCJpYXQiOjE2OTU2Mjk3MTQsImV4cCI6MTY5NjgzOTMxNH0.ULDyl0vX9IK4Q1JSP2flPPtbnDMzz49Ds1s3Ubb3me0",
        },
      });
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
