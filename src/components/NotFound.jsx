import { Link } from "react-router";
export const NotFound = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <h1>🫣</h1>
            <h2>Uh-oh what you're looking for doesn't exist</h2>
            <Link to="/"><b>Head home and try again</b></Link>
        </div>
    );
}