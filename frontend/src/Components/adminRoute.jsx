import {
    Navigate,
    Outlet
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";


export default function AdminRoute(){


    const {user,loading}=useAuth();



    if(loading){

        return (
            <div className="text-center mt-20 text-xl">
                Loading...
            </div>
        );

    }



    if(!user){

        return (
            <Navigate
            to="/login"
            replace
            />
        );

    }



    if(user.role !== "admin"){


        return (
            <Navigate
            to="/dashboard"
            replace
            />
        );

    }

    return <Outlet/>;

}

   


