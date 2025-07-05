# CORS Configuration Fix

## Changes Made

### Server Side (`/server/index.js`)
1. **Enhanced CORS Configuration**: Updated CORS options to properly handle multiple origins, credentials, and preflight requests
2. **Environment-based Origins**: CORS origins are now configurable via environment variables
3. **Additional Security Headers**: Added middleware for handling preflight OPTIONS requests
4. **Health Check Endpoint**: Added `/health` endpoint for testing CORS functionality

### Environment Configuration (`/.env`)
1. **Multiple Origins**: Updated CORS_ORIGIN to support comma-separated list of allowed origins
2. **Development & Production URLs**: Includes both local development and production URLs

### Client Side Changes

#### `vite.config.js`
- Added proxy configuration for local development to handle API calls

#### `src/utils/constant.jsx`
- Environment-aware API endpoint configuration
- Automatically switches between development and production URLs

#### `src/App.jsx`
- Environment-aware axios base URL configuration

#### `src/components/Login.jsx`
- Removed hardcoded API endpoint, now uses constant

#### `src/pages/PlacesFormPage.jsx`
- Updated hardcoded URLs to use relative paths (will use axios baseURL)

## How to Test

### 1. Start the Backend Server
```bash
cd server
npm run dev
```

### 2. Start the Frontend Development Server
```bash
cd client
npm run dev
```

### 3. Test CORS Configuration
Visit `http://localhost:5173` and try to:
- Login/Register
- Make API calls
- Check browser console for CORS errors

### 4. Test Health Endpoint
Visit `http://localhost:8080/health` to verify server is running

## Troubleshooting

### Common CORS Issues
1. **Credentials Not Working**: Ensure `withCredentials: true` is set on axios requests
2. **Preflight Requests Failing**: Check that OPTIONS method is allowed
3. **Wrong Origin**: Verify the frontend URL is included in CORS_ORIGIN

### Environment Issues
- **Development**: Frontend runs on `http://localhost:5173`, backend on `http://localhost:8080`
- **Production**: Update the production URLs in the environment variables

### Browser Console Errors
- Look for "Access-Control-Allow-Origin" errors
- Check for "preflight request" failures
- Verify credentials are being sent properly

## Environment Variables

Make sure these are set in your `.env` file:
```
PORT=8080
MONGO_URI=your_mongodb_uri
CORS_ORIGIN=http://localhost:5173,http://localhost:3000,https://sagarminor.onrender.com
```
