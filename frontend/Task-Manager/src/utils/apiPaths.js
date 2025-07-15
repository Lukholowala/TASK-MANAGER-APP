export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", //Register a new user (Admin or member)
        LOGIN: "/api/auth/login", //Authenticate user and return JWT token
        GET_PROFILE: "/api/auth/profile", //Get logged-in user details
    },
    USERS: {
        GET_ALL_USERS: "/api/users", //Get all users (admin only)
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`, //Get user by ID
        CREATE_USER: "/api/users", //Create a new user (admin only)
        UPDATE_USER: (userId) => `/api/users/${userId}`, //Update user details
        DELETE_USER: (userId) => `/api/users/${userId}`, // Delete a user
    },
    TASKS: {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", //Get dashboard data
        GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", // Get user dashboard data
        GET_ALL_TASKS: "/api/tasks", //Get all tasks (Admin: all, User: only assign)
        GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`,
        CREATE_TASK: "/api/tasks", //Create a new tasks admin only
        UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, //Update tasks details
        DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, //Delete tasks (Admin only)

        UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}`, //Update task status
        UPDATE_TO_DO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`,
    },

    REPORTS: {
        EXPORT_TASKS: "/api/reports/export/tasks",
        EXPORT_USERS: "/api/reports/exports/users",
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image",
    }
};