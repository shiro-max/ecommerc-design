import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h1>Oppsss....</h1>
            <h2>This page is not found.</h2>
            <Link href="/">Go Back Home!</Link>
        </div>
    );
}

export default NotFound;