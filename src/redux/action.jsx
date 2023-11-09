import axios from 'axios';

export const fetchpostrequest = () => {
  return {
    type: 'FETCH_POST',
  };
};

export const fetchpostsucc = (data) => {
  return {
    type: 'FETCH_SUCC',
    payload: data,
  };
};

export const fetchpostfailure = (error) => {
  return {
    type: 'POST_FAILURE',
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchpostrequest());

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        const posts = res.data.map((post) => post.title);
        dispatch(fetchpostsucc(posts));
      })
      .catch((error) => {
        dispatch(fetchpostfailure(error.message));
      });
  };
};
