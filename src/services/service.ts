import axios from "axios";
import { AxiosResponse } from "axios";

interface Contacts {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  // Add other properties if returned by the API
}
axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = async (contacts: Contacts): Promise<AuthResponse> => {
  try {
    const res: AxiosResponse<AuthResponse> = await axios.post(
      "/users/signup",
      contacts
    );
    setAuthHeader(res.data.token);
    alert(`Welcome ${contacts.name}`);
    console.log(contacts.name);

    // You can dispatch an action here if needed

    return res.data;
  } catch (error) {
    alert("This email is already in use!");
    throw error;
  }
};

export const login = async (contacts: Contacts): Promise<AuthResponse> => {
  try {
    const res: AxiosResponse<AuthResponse> = await axios.post(
      "/users/login",
      contacts
    );
    setAuthHeader(res.data.token);
    alert("Welcome 👋");

    // You can dispatch an action here if needed

    return res.data;
  } catch (error) {
    alert("The email or password is incorrect");
    throw error;
  }
};

// export const refreshUser = async (): Promise<any> => {
//   // Update the return type to match the actual response structure from your API
//   try {
//     const state = getState();
//     const persistToken = state.auth.token;

//     if (!persistToken) {
//       throw new Error("No token");
//     }

//     setAuthHeader(persistToken);
//     const { data } = await axios.get("/users/current");
//     return data;
//   } catch (err) {
//     alert(`err.message`);
//     throw err;
//   }
// };

export const logout = async (): Promise<void> => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
    alert("You logged out");

    // You can dispatch an action here if needed
  } catch (error) {
    alert(`error.message`);
    throw error;
  }
};
