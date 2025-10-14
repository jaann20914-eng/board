import { create } from "zustand";


const useAuthStore = create((set) => ({
    token: "",
    isLogined: false,
    user :"",

  login: (token, id) => {
    set((state) => {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("id", id);
      return { token: token, isLogined: true, user:id };
    });
  },

  logout: () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    set({ token: "", isLogined: false , user:""});
  }

}));

export default useAuthStore;

