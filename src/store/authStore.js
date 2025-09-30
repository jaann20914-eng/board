import { create } from "zustand";


const useAuthStore = create((set) => ({

    user: "",

    isLogined: false,

    login: (user) => {
        sessionStorage.setItem("loginId", user);
        set({ user: user, isLogined: true });
    },

    logout: () => {
        sessionStorage.removeItem("loginId");
        set({ user: "", isLogined: false });
    },
    deleteId: () => {
        sessionStorage.removeItem("loginId");
        set({ user: "", isLogined: false });
    }

}));

export default useAuthStore;