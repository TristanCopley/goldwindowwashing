import React from 'react';
import { Link } from "react-router-dom";

const NavButton = (props) => {

    return (

        <div> 
            
            <Link to={props.link}>
            <button className='bg-black text-yellow-400 p-3 rounded-md hover:bg-yellow-900 w-36 font-semibold'>
                {props.title}
            </button>
            </Link>
        </div>
            

    );

}

export default NavButton;