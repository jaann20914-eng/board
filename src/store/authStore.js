import { create } from "zustand";


const useAuthStore = create((set) => ({

    user: "",

    isLogined: false,

    login: (user) => {
        sessionStorage.setItem("loginId", user); // 세션 스토리지에 저장

        set({ user: user, isLogined: true })
    },

    logout: () => {
        sessionStorage.removeItem("loginId"); // 세션 스토리지에서 제거
        set({ user: "", isLogined: false })
    },

    deleteUser: () => {
        sessionStorage.removeItem("loginId");
        set({ user: '', isLogined: false });
    }


}));

export default useAuthStore;