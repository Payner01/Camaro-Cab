import React from 'react';
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const SchedulePage = (props) => {
    
    const [user, token] = useAuth();

    return ( 
        <div>
            <h1>Hello Schedule Page</h1>
        </div>
     );
}
 
export default SchedulePage;