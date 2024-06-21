# Customer Management Backend

This is the backend for the customer management application. It provides a RESTful API to manage customers and addresses.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/zhadowx/Customer-Management-Backend.git
   cd backend-repo
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root of the project and add the following variables:

   ```env
   NODE_ENV=development
   PORT=3000
   DATABASE=
   DATABASE_PASSWORD=
   ```

   **Note:** The MongoDB connection string and password is not shared as it is linked to a personal account. Please use your own MongoDB credentials.

4. Start the server:
   ```sh
   npm start
   ```

## API Routes

### Customers

- `GET /api/v1/customers` - Get all customers.
- `GET /api/v1/customers/:id` - Get a customer by ID.
- `POST /api/v1/customers` - Create a new customer.
- `PATCH /api/v1/customers/:id` - Update a customer by ID.
- `DELETE /api/v1/customers/:id` - Delete a customer by ID.

### Addresses

- `GET /api/v1/addresses` - Get all addresses.
- `GET /api/v1/addresses/:id` - Get an address by ID.
- `POST /api/v1/addresses` - Create a new address.
- `PATCH /api/v1/addresses/:id` - Update an address by ID.
- `DELETE /api/v1/addresses/:id` - Delete an address by ID.

### Associate Addresses with Customers

- `POST /api/v1/customers/:id/addresses` - Update the addresses of a customer by providing an array of address IDs.

## Project Structure

backend/
├── controllers/
│ ├── addressController.js
│ └── customerController.js
├── models/
│ ├── addressModel.js
│ └── customerModel.js
├── routes/
│ ├── addressRoutes.js
│ └── customerRoutes.js
├── .env
├── app.js
├── server.js
└── package.json
