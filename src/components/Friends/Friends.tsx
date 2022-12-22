import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getAllFriends } from "../../features/auth/authSlice";
import Friend from "./Friend/Friend";


const Friends = () => {
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(getAllFriends());
    }, []);
    
    return (
      <div>
        <Friend />
        </div>
    );
  };
  
  export default Friends;


