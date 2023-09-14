# HNGx-CRUD
crud implementation Documentation
RESTful API Documentation
Introduction
This documentation provides details on how to use the RESTful API for managing user data.

Base URL
The base URL for this API is: https://hngxcrudd.onrender.com/api/

Authentication
This API does not require authentication for the provided endpoints.

Endpoints
1. Create a User
Endpoint: /api
HTTP Method: POST
Request Body: JSON object with a username field
Description: Creates a new user with the provided username.
Request Example:
json

{
  "username": "john_doe"
}
Response Example:
json

{
  "_id": "user_id",
  "username": "john_doe"
}
Error Response:
400 Bad Request: Invalid input data
500 Internal Server Error: Failed to create the user
2. Get All Users
Endpoint: /api/getAll
HTTP Method: GET
Description: Retrieves a list of all users.
Response Example:
json

[
  {
    "_id": "user_id1",
    "username": "john_doe1"
  },
  {
    "_id": "user_id2",
    "username": "jane_smith"
  }
]
Error Response:
500 Internal Server Error: Failed to retrieve user data
3. Get User by ID
Endpoint: /api/:user_id
HTTP Method: GET
Description: Retrieves a user by their ID.
Response Example:
json

{
  "_id": "user_id",
  "username": "john_doe"
}
Error Response:
500 Internal Server Error: Failed to retrieve user data
4. Update User by ID
Endpoint: /api/:user_id
HTTP Method: PATCH
Request Body: JSON object with fields to update
Description: Updates a user by their ID.
Request Example:
json

{
  "username": "new_username"
}
Response Example:
json

{
  "_id": "user_id",
  "username": "new_username"
}
Error Response:
400 Bad Request: Invalid input data
500 Internal Server Error: Failed to update user data
5. Delete User by ID
Endpoint: /api/:user_id
HTTP Method: DELETE
Description: Deletes a user by their ID.
Response Example:
sql

Deleted the user and user_id successfully
Error Response:
400 Bad Request: Invalid user ID
500 Internal Server Error: Failed to delete user
Error Handling
The API may return appropriate HTTP status codes along with error messages in the JSON format for error responses.
Common error status codes include 400 for bad requests and 500 for internal server errors.
