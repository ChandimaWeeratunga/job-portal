import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div className="home-content">
            <h1>Welcome to the Job Portal</h1>
            <p>Select your option</p>
            <Link to = "/seeker-register">Job Seeker</Link>
            <Link to = "/employer-register">Employer</Link>
        </div>
    );
}
 
export default Home;