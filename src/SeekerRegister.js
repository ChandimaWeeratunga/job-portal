import { useState } from "react";
import {Link} from "react-router-dom";

const SeekerRegister = () => {
    
    return (
        <div className="form">
            <h2>Register as a Job Seeker</h2>
            <form action="">
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
                <label htmlFor="">Birthday</label>
                <input type="text" />
                <button>Register</button>
                <p>Already have an account ? <Link to = "seeker-login">Login</Link></p>
            </form>
        </div>
    );
}
 
export default SeekerRegister;