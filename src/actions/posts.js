import * as api from "../api";
export const FETCH_ALL = "FETCH_ALL";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
export const CREATE = "CREATE";
export const LIKEPOST = "LIKEPOST";
//Action Creators
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch({
        type: FETCH_ALL,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKEPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
