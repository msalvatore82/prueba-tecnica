import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllFriends } from "../../features/auth/authSlice";
import Friend from "./Friend/Friend";

const Friends = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllFriends());
    //   dispatch(reset())
    }, []);
    
    return (
      <div>
        <Friend />
        </div>
    );
  };
  
  export default Friends;


