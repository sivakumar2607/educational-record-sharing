import React from "react";
import useAuth from "./hooks/useAuth";
import PublicUserComponent from "./components/Public-User/PublicUserComponent"
import NewRecord from "./components/NewRecord/NewRecord"
import UserProtectedComponent from "./components/UserProtected/UserProtectedComponent";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
function App(){
 const isLogin = useAuth();
 return isLogin ? <UserProtectedComponent/> : <UserLoginPage/>
}
export default App;