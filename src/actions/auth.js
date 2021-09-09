import { AUTH } from "../constants/actionType";
import * as api from "../api/index";

export const signin = (formData, history) => {
  return async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);

      dispatch({ type: AUTH, data });
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signup = (formData, history) => {
  return async (dispatch) => {
    try {
      //   const { data } = await api.fetchPosts();
      const { data } = await api.signUp(formData);

      dispatch({ type: AUTH, data });
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
};
