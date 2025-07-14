import { type FC, useEffect, useState} from "react";
import { User } from "oidc-client-ts";
import userManager from "./authConfig.ts";
import {login, logout} from "./authService.ts";

const Authenticator: FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        userManager.getUser().then(setUser);
    }, []);

    return (
        <div>
            <h1>React + Spring Authorization Server + PKCE</h1>
            {user ? (
                <div>
                    <p>Logged in as {user.profile.sub}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </div>
    );
}

export default Authenticator;