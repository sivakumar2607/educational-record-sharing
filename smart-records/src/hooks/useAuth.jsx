import React,{useState,useEffect} from "react";
import {Keycloak} from 'keycloak-js'
function useAuth(){
const[isLogin,setLogin] = useState(false);
useEffect(()=>{
    const client = new Keycloak({
        url:process.env.VITE_KEYCLOAK_URL,
        realm:process.env.VITE_KEYCLOAK_REALM,
        clientId:process.env.VITE_KEYCLOAK_CLIENT,
})
},[])
return isLogin;
}
export default useAuth;