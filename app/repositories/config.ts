export const config = {
    apiGateway: {
        routes: {
            auth: {
                login: 'auth/login',
                refreshToken: 'auth/refresh-token',
                logout: 'auth/logout',
                permissionsGetAll: 'auth/permissions',
                keepAlive: 'auth/keep-alive',
                forgotPassword: 'auth/forgot-password',
                changeForgotPassword: 'auth/change-forgot-password',
                register: 'auth/signup',
                verifyYourAccount: 'auth/verify-your-account'
            },
            pokemon: {
                getAll: 'pokemon'
            }
        }
    }
};
