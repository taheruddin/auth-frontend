import userManager from "./authConfig.ts";


export function login() {
    userManager.signinRedirect();
}

export function logout() {
    userManager.signoutRedirect();
}

export async function handleCallback() {
    return await userManager.signinRedirectCallback();
}
