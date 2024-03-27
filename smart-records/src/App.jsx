import React from "react";
import useAuth from "./hooks/useAuth";
import PublicUserComponent from "./components/Public-User/PublicUserComponent"
import UserProtectedComponent from "./components/UserProtected/UserProtectedComponent";
function App(){
 const isLogin = useAuth();
 return isLogin ? <UserProtectedComponent/> : <PublicUserComponent/>
}
export default App;