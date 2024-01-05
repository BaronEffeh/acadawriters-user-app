import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Error404 = () => {
    return (
        <div className="error404">
            <h1>Oops!</h1>
            <h4>ERROR 404 - PAGE NOT FOUND</h4>
            <p>The page you are looking for have either been removed, or dosn't exist</p>
            <Link to="/dashboard">Go back to your Dashboard.</Link>
        </div>
    );
}

export default Error404;