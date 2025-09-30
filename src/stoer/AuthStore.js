import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: "",
    islogin: false,
    login: (user) => set({ user: user, islogin: true }),
    logout: () => set({ user: "", islogin: false }),
}));

export default useAuthStore;
