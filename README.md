# Machine Learning API Frontend

# Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.18.0 or higher)
- npm (v6.14.0 or higher)

# Getting Started

Follow these steps to set up and run the project:

1. Clone the Repository
   Clone the project repository to your local machine:

```
bash
git clone <repo-url>
cd <repo-folder>
```

2. Install Dependencies
   Install all required dependencies:

```
bash
npm install
```

3. Setup Environment Variables
   Create a .env file at the root of the project and define the VITE_API_URL to connect the frontend with the backend.

```
bash
touch .env
```

Add the following to your .env file:

```
VITE_API_URL=<your-backend-endpoint>
```

For backend initialization, refer to the [ml_api_be repository.](https://github.com/farhanfahreezy/ml_api_be)

4. Run the Development Server
   Run the Vite development server:

```
bash
npm run dev
```

The application should now be available at http://localhost:5173 or the port specified by Vite.
