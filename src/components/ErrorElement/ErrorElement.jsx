import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="h-screen text-center">
            <h3 className="font-bold text-5xl">Oops!</h3>
            <h4 className="font-semibold text-4xl">404 Not Found</h4>
            <Link to="/"><button className="btn">Back to Home</button></Link>
        </div>
    );
};

export default ErrorElement;