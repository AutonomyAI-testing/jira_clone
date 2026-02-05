# Mock Data Setup

This Jira clone can run as a demo application without a backend server using mock data.

## Configuration

The application uses a simple boolean flag to switch between real API and mock data mode.

### Enabling Mock Data Mode (Demo Mode)

Open [src/shared/utils/config.js](src/shared/utils/config.js) and set:

```javascript
export const USE_MOCK_DATA = true;
```

### Using Real Backend

To connect to a real backend, set:

```javascript
export const USE_MOCK_DATA = false;
```

And optionally configure the backend URL:

```javascript
export const API_BASE_URL = 'http://localhost:3000'; // or your backend URL
```

## How It Works

When `USE_MOCK_DATA = true`:

1. **All API calls use mock data** - No backend server needed
2. **Authentication is bypassed** - Automatically logs in with a mock token
3. **Full demo functionality** - All CRUD operations work with in-memory mock data

When `USE_MOCK_DATA = false`:

1. **All API calls go to the real backend** - Requires backend server running
2. **Real authentication** - Creates guest accounts via `/authentication/guest` endpoint
3. **Full production functionality** - All operations persist to the database

## Mock Data Files

Mock data is located in [src/shared/utils/mockData/](src/shared/utils/mockData/):

- `project.js` - Project data with users and issues
- `currentUser.js` - Current authenticated user
- `issues.js` - List of issues and individual issue data
- `authentication.js` - Mock authentication tokens
- `index.js` - Router that maps endpoints to mock data

## Supported Endpoints

All application endpoints are covered by mock data:

- `GET /project` - Project details
- `GET /currentUser` - Current user info
- `GET /issues` - List of issues
- `GET /issues/:id` - Individual issue
- `POST /authentication/guest` - Authentication
- `POST /issues` - Create issue
- `POST /comments` - Create comment
- `PUT /project` - Update project
- `PUT /issues/:id` - Update issue
- `PUT /comments/:id` - Update comment
- `DELETE /issues/:id` - Delete issue
- `DELETE /comments/:id` - Delete comment

## Customizing Mock Data

You can edit the mock data files to customize the demo content:

1. Add/remove users in `project.js`
2. Add/remove issues in `issues.js`
3. Modify project details in `project.js`
4. Add comments to issues in `issues.js`

Changes will be reflected immediately in the application.
