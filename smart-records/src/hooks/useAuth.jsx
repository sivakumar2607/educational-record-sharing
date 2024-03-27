import React,{useState,useEffect} from "react";
import {KeyCloak} from 'keycloak-js'
function useAuth(){
const[isLogin,setLogin] = useState(false);
useEffect(()=>{
    const client = new KeyCloak({
        url:0,
        realm:0,
        clientId:0,
})
},[])
return isLogin;
}
export default useAuth;