# Millenium Task

## Overview

This project is an application set up as a monorepo, containing both frontend and backend components in a single repository.

### The application consists of:

- **Frontend**: Built using React, TypeScript, Vite, and MUI for the UI.
- **Backend**: Implemented using Node.js, providing REST APIs.

## Features

### Frontend Application

This is a simple banking application that reflects core banking operations:

- **Transaction Form**: Built with React Hook Form and validated using Zod, with fields for amount, account number, address, description, and beneficiary.
- **Balance Tracker**: Component to display the current account balance, reflecting real-time changes and filter changes.
- **Filtering Input**: Allows filtering of transactions by the beneficiary field.
- **Transaction Details and Management**: Capability to view detailed information of transactions, generate confirmation documents, and delete transactions.
- **State Management**: Uses Tanstack Query for handling async operations like queries and mutations. Additional state management is handled via React Context API and custom hooks.

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your machine:

- **Node.js** (version >= 16)
- **npm** or **Yarn**

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/PiotrGolon/Zadanie-rekrutacyjne-mill.git

   ```

2. Install dependencies for all packages:

   ```sh
   npm install
   ```

   or, if you're using Yarn:

   ```sh
   yarn install
   ```

## Running the Application

### Development Mode

- **Frontend**:

  ```sh
  npm run dev
  ```

  or

  ```sh
  yarn dev
  ```

- **Backend**:
  ```sh
  npm run server
  ```
  or
  ```sh
  yarn server
  ```

This will run both the frontend (on Vite's default port 5173) and the backend server (on port 3000).

## Project Structure

```
zadanie-rekrutacyjne-mill/
├── client/        # React/TS frontend
├── server/        # Node.js backend
├── .gitignore
├── design.png
└── README.md
```

## Scripts Overview (Frontend)

- **dev**: Starts the frontend application in development mode.
- **build**: Builds the frontend for production.
- **lint**: Runs ESLint to check for code quality.
- **preview**: Previews the built frontend.
- **test**: Runs unit and integration tests using Vitest.

## Testing

### Unit and Integration Tests

The project uses Vitest and Testing Library for unit and integration tests. To run all tests:

```sh
npm run test
```

### Cypress E2E Tests

To run end-to-end tests for the frontend:

```sh
npx cypress open
```

This command will open the Cypress Test Runner where you can execute the E2E tests. Select the test `e2eMainBusinessLogicTest.cy.js` and open it using the Chrome browser to validate the core application logic.

## Technologies Used

- **Frontend**: React, Vite, MUI, React Router, React Hook Form, Zod
- **Backend**: Node.js
- **Testing**: Vitest, Cypress, Testing Library
- **Others**: TypeScript, ESLint, Prettier

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or collaboration, reach out at: [piotrek98golon@o2.pl](mailto:piotrek98golon@o2.pl)
