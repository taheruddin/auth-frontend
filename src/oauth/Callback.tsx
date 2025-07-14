import {type FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {handleCallback} from "./authService.ts";

const Callback: FC = () => {

    const navigate = useNavigate();
    useEffect(() => {
        handleCallback().then(() => navigate('/'));
    }, [navigate]);

    return <div>Loading...</div>;
}

export default Callback;