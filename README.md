# Express.js: Crashing on Missing Request Body Data

This repository demonstrates a common error in Express.js applications where the application crashes due to missing or malformed data in the request body. The example focuses on a POST request to create a new user, but the principle applies to any endpoint processing request bodies.

## Problem

The provided Express.js application handles POST requests to `/users`.  It expects a `name` field within the request body. However, if a POST request is sent without the `name` field, the application throws an error and crashes because `user.name` tries to access a property of an undefined object.

## Solution

The solution involves adding comprehensive error handling to gracefully handle scenarios where the request body is missing or contains unexpected data. This can be achieved by first validating the request body before accessing its contents and returning an appropriate error response if the data is insufficient or invalid.  Always validate before using the data.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to start the server.
5. Send a POST request to `http://localhost:3000/users` without a `name` field (e.g., using curl or Postman). The server will crash.
6. Then run `node bugSolution.js` to see the fixed version.