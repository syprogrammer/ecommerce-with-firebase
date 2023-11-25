import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import {saveUserAuth,saveUserData } from '../redux/slices/userSlice';
import getUserinfo from '../utils/getUserinfo';

const useAuth = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const dispatch = useDispatch();
    const getUserData =async(uid)=>{
        const userData = await getUserinfo(uid)
        if(userData){
          dispatch(saveUserData(userData))
        }
        
        console.log("userData",userData) 
     }
     
     useEffect(() => {
       onAuthStateChanged(auth, (user) => {
         if (user) {
           console.log(user);
           setIsAuthenticated(true)
           dispatch(
            saveUserAuth({
              isAuthenticated:true,
              uid:user.uid
            })
           ); 
           getUserData(user.uid)
         }
       });
     }, [auth, dispatch]);

  return isAuthenticated
}

export default useAuth