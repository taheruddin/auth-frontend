import { UserManager } from 'oidc-client-ts';

const config = {
    authority: "http://localhost:9000", // Spring Authorization Server base URL
    client_id: "pkce-oidc-client",
    redirect_uri: "http://localhost:5173/oauth-callback", // should match your registered redirect URI
    response_type: "code",
    scope: "openid profile", // add your scopes
    post_logout_redirect_uri: "http://localhost:5173/",
    automaticSilentRenew: true,
    loadUserInfo: true,
};

const userManager = new UserManager(config);

export default userManager;