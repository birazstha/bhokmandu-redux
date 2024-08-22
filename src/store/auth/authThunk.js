import { jwtDecode } from "jwt-decode";
import { fetchProfile, userLogin } from "../../api";
import { loginSuccess, refreshProfile } from "./authSlice";
import toast from "react-hot-toast";

export const googleLogin = (response) => async (dispatch) => {
  const { credential } = response;
  const data = jwtDecode(credential);
  const finalData = {
    id: data.sub,
    name: data.name,
    email: data.email,
    profile_picture: data.picture,
  };

  try {
    const accessToken = await toast.promise(userLogin(finalData), {
      loading: "Logging in",
      success: "Logged in successfully",
    });
    dispatch(loginSuccess(accessToken));
    dispatch(initializeAuth());
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const initializeAuth = () => async (dispatch, getState) => {
  const { accessToken } = getState().auth;
  console.log(accessToken);

  if (accessToken) {
    try {
      const profile = await fetchProfile(accessToken);
      dispatch(refreshProfile(profile));
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }
};
