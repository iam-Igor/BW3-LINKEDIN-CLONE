export const URL_POSTS = "https://striveschool-api.herokuapp.com/api/posts/";
export const URL_PROFILE =
  "https://striveschool-api.herokuapp.com/api/profile/";
export const GET_PROFILE_DATA = "GET_PROFILE_DATA";
export const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ1YWM1NWU3ZTAwMThmODNjMGIiLCJpYXQiOjE2OTk4Njc5OTQsImV4cCI6MTcwMTA3NzU5NH0.s42cKTE4Spw6hQNWnXWOTl1nLe5K6KLEtN_9S8-D2OU";
export const URL_COMMENTS =
  "https://striveschool-api.herokuapp.com/api/comments/";
export const API_KEY_COMMENTS =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyNTlkNWM1NWU3ZTAwMThmODNjZDIiLCJpYXQiOjE2OTk4OTU3NjYsImV4cCI6MTcwMTEwNTM2Nn0.N1id-dNfADyfRGpvBvNv7h9g-L1-pFkS3NQzDrVD7fs";
export const CREATE_EVENT = "CREATE_EVENT";
export const LIKE_POST = "LIKE_POST";
export const URL_PEXEL = `https://api.pexels.com/v1/search?query=random%20photos&per_page=80`;
export const GET_RANDOM_PHOTOS = "GET_RANDOM_PHOTOS";
export const PEXEL_KEY =
  "5RKicZfAEfo8m1JX6yT1vyTmAYDVq4777xWQyZfx1QBRZM4xWq7CeS1i";

export const getProfileAction = () => {
  return async (dispatch) => {
    fetch(URL_PROFILE + "me", {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .then((data) => {
        dispatch({
          type: GET_PROFILE_DATA,
          payload: data,
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const sortPostsByDate = (posts) => {
  return posts.sort((a, b) => {
    // Converti le stringhe di date in oggetti Date
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    // Ordina in base alla differenza di tempo
    return dateB - dateA;
  });
};

export const sortPostsByDateOldest = (posts) => {
  return posts.sort((a, b) => {
    // Converti le stringhe di date in oggetti Date
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    // Ordina in base alla differenza di tempo
    return dateA - dateB;
  });
};

export const getRandomPhotos = () => {
  return async (dispatch) => {
    fetch(URL_PEXEL, {
      headers: {
        Authorization: PEXEL_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .then((data) => {
        dispatch({
          type: GET_RANDOM_PHOTOS,
          payload: data,
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
