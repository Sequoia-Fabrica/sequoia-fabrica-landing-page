import Link from "next/link";

export default function FourOhFour() {
    return (
    <div className="m-4">
        <h1>404</h1>
        <h2>Sorry! This page does not exist!</h2>
        <p className="m-auto text-center pt-5">
            <Link href="/">
                Go back home
            </Link>
        </p>
    </div>
    );
}
