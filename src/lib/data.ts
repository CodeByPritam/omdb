// Object ({ of Datas })
const data = {

    // Documentation Data
    docs: {
        authentication: [
            { name: 'Login', method: 'POST', endpoint: '/auth/login', },
            { name: 'Register', method: 'POST', endpoint: '/auth/register', },
            { name: 'Current User', method: 'GET', endpoint: '/auth/me', },
            { name: 'Verify Email', method: 'POST', endpoint: '/auth/verify-email', },
            { name: 'Resend Verification', method: 'POST', endpoint: '/auth/resend-verification', },
            { name: 'Logout', method: 'POST', endpoint: '/auth/logout', },
            { name: 'Refresh Token', method: 'POST', endpoint: '/auth/refresh-token', },
            { name: 'Forgot Password', method: 'POST', endpoint: '/auth/forgot-password', },
            { name: 'Reset Password', method: 'POST', endpoint: '/auth/reset-password', },
        ],
    },

};

// Export Endpoints
export default Object.freeze(data);