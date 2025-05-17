
export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
   AUTH: {
    REGISTER: "/api/auth/register",  //Register a new user
    LOGIN: "/api/auth/login",        //Login user and get token
    GET_PROFILE: "/api/auth/profile", //Get current logged-in user's profile info (requires token)
  },

  RESUME: {
    CREATE: "/api/resume",  //Create a new resume (POST)
    GET_ALL: "/api/resume",  //Get all resumes for the current user (GET)
    GET_BY_ID: (id) => `/api/resume/${id}`, //Get specific resume by ID (GET)
    UPDATE: (id) => `/api/resume/${id}`,   //Update specific resume by ID (PUT)
    DELETE: (id) => `/api/resume/${id}`,   //Delete specific resume by ID (DELETE)
    UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,  //Upload images (profile + thumbnail) for a resume
  },

  IMAGE: {
    UPLOAD_IMAGE: "api/auth/upload-image", //Upload single image (general use)
  },

};