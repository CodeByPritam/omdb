// Object ({ of Datas })
const data = {

    // Page: ({ Documentation })
    docs: {

        // Authentication Endpoints
        authentication: [
            { name: 'Login', method: 'POST', endpoint: '/auth/login', }, // Log in an existing user. ({ identifier, password })
            { name: 'Register', method: 'POST', endpoint: '/auth/register', }, // Register a new user. ({ name, username, email, password })
            { name: 'Current User', method: 'GET', endpoint: '/auth/whoami', }, // Get the currently authenticated user.
            { name: 'Logout', method: 'POST', endpoint: '/auth/logout', }, // Log out the current user.
            { name: 'Verify Email', method: 'POST', endpoint: '/auth/verify-email', }, // Verify a user's email address.
            { name: 'Resend Verification', method: 'POST', endpoint: '/auth/resend-verification', }, // Resend the email verification link.
            { name: 'Refresh Token', method: 'POST', endpoint: '/auth/refresh-token', }, // Generate a new access token using a refresh token. ({ refreshToken })
            { name: 'Forgot Password', method: 'POST', endpoint: '/auth/forgot-password', }, // Send a password reset link via email. ({ email })
            { name: 'Reset Password', method: 'POST', endpoint: '/auth/reset-password', }, // Reset the user's password. ({ prevPassword, newPassword })
        ],

        // Title Endpoints
        titles: [
            // List, filter, and paginate all titles.
            // ({ name, plot, type, country, year, sort, page, limit, fmt })
            { name: 'List Titles', method: 'GET', endpoint: '/titles', },

            // Get complete information about a specific title. 
            // Title ID: ({ title_id } as { omdbID, imdbID, tmdbID, mcID, rtID, fmt })
            { name: 'Get Title', method: 'GET', endpoint: '/titles/:title_id', },
        ],

        // Search Endpoints
        search: [
            // Search the media database.
            // ({ query, type, page, limit, fmt })
            { name: 'Search', method: 'GET', endpoint: '/search', },

            // Get search suggestions while typing.
            // ({ query, limit, fmt })
            { name: 'Search Autocomplete', method: 'GET', endpoint: '/search/autocomplete', },
        ],

        // Seasons Endpoints
        seasons: [
            // List all seasons belonging to a title.
            // Title ID: ({ title_id } as { omdbID, imdbID, tmdbID, mcID, rtID, fmt })
            { name: 'List Title Seasons', method: 'GET', endpoint: '/titles/:title_id/seasons', },

            // Get complete information about a specific season.
            // Season ID: ({ season_id })
            { name: 'Get Season', method: 'GET', endpoint: '/seasons/:season_id', },
        ],

        // Episodes Endpoints
        episodes: [
            // List all episodes belonging to a season.
            // Season ID: ({ season_id })
            { name: 'List Season Episodes', method: 'GET', endpoint: '/seasons/:season_id/episodes', },

            // Get complete information about a specific episode.
            // Episode ID: ({ episode_id })
            { name: 'Get Episode', method: 'GET', endpoint: '/episodes/:episode_id', },
        ],

        // Cast & Crew Endpoints
        people: [
            // List all the person of a title .
            // Title ID: ({ title_id })
            { name: 'List Cast & Crew', method: 'GET', endpoint: '/people/:title_id', },

            // Get information about a specific person.
            // Cast & Crew ID ({ cc_id })
            { name: 'Get Cast & Crew', method: 'GET', endpoint: '/people/bio/:cc_id', },
        ],

        // Collections Endpoints
        collections: [
            // List collections in the database.
            // Field: ({ name, page, limit, fmt })
            { name: 'List Collections', method: 'GET', endpoint: '/collections' },

            // Get information about a specific collection.
            // Collection ID: ({ collection_id })
            { name: 'Get Collection', method: 'GET', endpoint: '/collections/:collection_id' },
        ],

        // Discover Super Endpoints
        discover: [
            // Discover titles using advance filters and sorting.
            // Field: ({ name, plot, type, genre, keyword, country, language, year, status, certification, sort, page, limit, fmt, etc })
            { name: 'Discover Titles', method: 'GET', endpoint: '/discover' },
        ],

        // Recommendations
        recommendations: [
            // Get recommendations based on a title or user.
            // Field: ({ title_id, user_id, type, limit })
            { name: 'Get Recommendations', method: 'GET', endpoint: '/recommendations' },
        ],

        // Reference
        reference: [
            { name: 'Pagination', method: 'disable', endpoint: '' },
            { name: 'Filtering', method: 'disable', endpoint: '' },
            { name: 'Sorting', method: 'disable', endpoint: '' },
            { name: 'Errors Codes', method: 'disable', endpoint: '' },
            { name: 'Response Format', method: 'disable', endpoint: '' },
        ],
    },

};

// Export Endpoints
export default Object.freeze(data);