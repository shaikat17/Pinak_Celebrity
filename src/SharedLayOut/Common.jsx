import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";


const Common = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    },[])
    
    if(loading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center">
                <RingLoader color="#36d7b7" />
            </div>
        )
    }
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
};

export default Common;