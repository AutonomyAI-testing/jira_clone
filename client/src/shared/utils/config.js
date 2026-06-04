// Application configuration

// Set this to true to use mock data instead of real backend
// This allows the app to work as a demo without a running backend
export const USE_MOCK_DATA = true;

// API base URL (only used when USE_MOCK_DATA is false)
export const API_BASE_URL =
  (typeof process !== 'undefined' && process.env && process.env.API_URL) || 'http://localhost:3000';
