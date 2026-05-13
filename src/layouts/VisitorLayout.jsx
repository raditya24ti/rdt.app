import { Outlet } from "react-router-dom";

export default function VisitorLayout() {

    return (
        <div className="bg-white min-h-screen">

            <Outlet />

        </div>
    );
}