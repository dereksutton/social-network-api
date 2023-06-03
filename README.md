# Social Network API

## Description

This is a RESTful API for a social network web application, where users can share their thoughts, react to friends' thoughts, and add friends to their friend list. The API was built with Express.js and MongoDB, utilizing  Mongoose as an ODM.

## Table of Contents

* [Features](#features)
* [Video Demo](#video-demo)
* [Installation](#installation)
* [API Endpoints](#api-endpoints)
* [Testing](#testing)
* [License](#license)
* [Contributors](#contributors)
* [Contact](#contact)

## Features

* User creation, retrieval, update and deletion.
* Thought (post) creation, retrieval, update and deletion.
* Reaction (sub-document) creation and deletion.
* Add and remove friends to a User's friend list.

## Video Demo


## Installation

1. Clone the repository:

`git clone https://github.com/your_username/social-network-api.git`

2. Navigate to the project directory and install the dependencies:

`cd social-network-api`
`npm install`

3. Ensure that MongoDB is installed on your machine and running.
4. Start the server:

`npm start`

## API Endpoints

Below is a list of the HTTP routes and methods to interact with the API:

- User Routes

    * `GET /api/users` - Get all users
    * `GET /api/users/:id` - Get a user by ID
    * `POST /api/users` - Create a new user
    * `PUT /api/users/:id` - Update a user by ID
    * `DELETE /api/users/:id` - Delete a user by ID

- Friendship Routes

    * `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list
    * `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list

- Thought Routes

    * `GET /api/thoughts` - Get all thoughts
    * `GET /api/thoughts/:id` - Get a thought by ID
    * `POST /api/thoughts` - Create a new thought
    * `PUT /api/thoughts/:id` - Update a thought by ID
    * `DELETE /api/thoughts/:id` - Delete a thought by ID

- Reaction Routes

    * `POST /api/thoughts/:thoughtId/reactions` - Create a new reaction for a thought
    * `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete a reaction from a thought

## Testing

You can test the API routes with Insomnia or any API testing tool of your choice.

## License

![MIT](https://img.shields.io/badge/license/license-MIT-blue.svg)
[MIT](https://opensource.org/licenses/MIT)

## Contributors

* Challenge assignment instructions provided by Georgia Tech Coding Bootcamp.
* Social Network API built and tested by [github/dereksutton](https://github.com/dereksutton)
* Extra educational resources for learning MongoDB, Mongoose and writing the Express routes: [Link_1](https://www.udemy.com/course/nodejs-api-masterclass), [Link_2](https://www.udemy.com/course/mongodb-the-complete-developers-guide)

## Contact

Built by [github/dereksutton](https://github.com/dereksutton). You can email me [here](mailto:dereksutton86@gmail.com).
