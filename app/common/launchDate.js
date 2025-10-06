// Launch date configuration
// Change this date to set when your features will launch
// Format: 'YYYY-MM-DDTHH:MM:SS'

export const LAUNCH_DATES = {
    TUTORIALS: '2025-10-20T00:00:00',
    INTERVIEWS: '2025-10-25T00:00:00',
    JOB_UPDATES: '2025-10-30T00:00:00',
    DEFAULT: '2025-10-20T00:00:00'
};

// Helper function to get launch date for a specific feature
export const getLaunchDate = (feature = 'DEFAULT') => {
    return new Date(LAUNCH_DATES[feature] || LAUNCH_DATES.DEFAULT).getTime();
};

// Helper function to get days remaining
export const getDaysRemaining = (feature = 'DEFAULT') => {
    const targetDate = getLaunchDate(feature);
    const now = new Date().getTime();
    const difference = targetDate - now;
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
};