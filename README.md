
# Express.js API

This is a simple Express.js API that serves a homepage route with JSON response data.

## Features
- Uses **Express.js** for handling HTTP requests
- Includes **CORS** support
- Returns structured JSON response on the root endpoint (`/`)

## Installation

### Prerequisites
- **Node.js** (>= 14.x recommended)
- **npm** (comes with Node.js)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/robertGhandi/HNG12-API.git
   cd HNG12-API
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Base URL

```
http://localhost:3000/api/v1/books
```

### 1. **Home Route**
- **URL:** `/`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "email": "robertzerah@gmail.com",
    "current_datetime": "2025-01-30T12:00:00.000Z",
    "github_url": "https://github.com/robertGhandi/HNG12-API.git"
  }
  ```

## Project Structure
```
HNG12-API/
├── index.js            # Main application file
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
```

## Hire Node.js Developers
If you're looking to hire Node.js developers, check out [this link](https://hng.tech/hire/nodejs-developers).


