import {create} from "zustand";


const useAuthStore = create((set)=> ({

    user :"",
    
    isLogined :false,
    
    login : (user)=>{
        return set( {user :user, isLogined:true} )
    },

    logout : ()=>{
        return set( {user:"", isLogined:false} )
    }

}));

export default useAuthStore;