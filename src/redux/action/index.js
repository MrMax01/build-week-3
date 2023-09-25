export const GET_PERSONE_ASIDE = "GET_PERSONE_ASIDE";
export const getPersoneAside = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authotization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzg0ODM3NTJhODAwMTQ1Njg3NjIiLCJpYXQiOjE2OTU2MjczMzcsImV4cCI6MTY5NjgzNjkzN30.R0yTN0r5Ct2hhB51PttVXFrZTwy8g1PkYbzMH0FGtuA",
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
