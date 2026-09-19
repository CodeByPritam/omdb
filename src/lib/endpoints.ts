// All Endpoints
const endpoints = {

    // Authentication
    authentication: [
        { name: 'Login', method: 'POST', url: '/auth/login', },
        { name: 'Register', method: 'POST', url: '/auth/register', },
        { name: 'Current User', method: 'GET', url: '/auth/me', },
        { name: 'Verify Email', method: 'POST', url: '/auth/verify-email', },
        { name: 'Resend Verification', method: 'POST', url: '/auth/resend-verification', },
        { name: 'Logout', method: 'POST', url: '/auth/logout', },
        { name: 'Refresh Token', method: 'POST', url: '/auth/refresh-token', },
        { name: 'Forgot Password', method: 'POST', url: '/auth/forgot-password', },
        { name: 'Reset Password', method: 'POST', url: '/auth/reset-password', },
    ],
    
};

// Export Endpoints
export default Object.freeze(endpoints);