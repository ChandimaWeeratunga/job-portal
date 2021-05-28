import {Link} from "react-router-dom";

const EmployerRegister = () => {
    return (
        <div className="form">
            <h2>Register as an Employer</h2>
            <form action="">
                <label htmlFor="">First name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
                <label htmlFor="">Comapny Name</label>
                <input type="text" />
                <button>Register</button>
                <p>Already have an account ? <Link to = "employer-login">Login</Link></p>
            </form>
        </div>
    );
}
 
export default EmployerRegister;