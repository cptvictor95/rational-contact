# Contact Management API

A RESTful API for managing contacts, built with Express.js, TypeScript, and MongoDB.

## Features

- Create new contacts with name and phone number
- Retrieve all contacts
- Update existing contacts
- Delete contacts
- Automatic phone number normalization
- MongoDB persistence

## Prerequisites

- MongoDB running locally on port 27017
- Bun installed

## Installation

To install dependencies:

```bash
bun install
```

## Running the Application

To start the development server:

```bash
bun run dev
```

The server will start on `http://localhost:8080`

## API Endpoints

### GET `/api/contact`

Retrieve all contacts

### POST `/api/contact/add`

Create a new contact

```json
{
  "name": "John Doe",
  "phone": "123-456-7890"
}
```

### PUT `/api/contact/update/:id`

Update an existing contact

```json
{
  "name": "John Doe",
  "phone": "123-456-7890"
}
```

### DELETE `/api/contact/delete/:id`

Delete a contact

## Development

This project uses:

- TypeScript for type safety
- Express.js for the web server
- Mongoose for MongoDB interactions
- ESLint for code linting
- Vitest for testing

Built with [Bun](https://bun.sh) - a fast all-in-one JavaScript runtime.
