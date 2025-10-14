import axios from "axios";


export const caxios = axios.create({
    baseURL : `http://10.5.5.3`
});

caxios.interceptors.request.use(
    (config)=>{ //나가는객체에대한 여러가지를 할수있는 객체
        const token =sessionStorage.getItem("token");
        if(token){
            config.headers["Authorization"] =`Bearer ${token}`;
        }
        return config;
    }
);