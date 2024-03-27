import React,{useState} from "react";
function useAuth(){
const[isLogin,setLogin] = useState(false)
return isLogin;
}
export default useAuth;