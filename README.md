# Visitor Counter App

## Description

This application is developed as part of a coursework assignment and is designed to count the number of visitors to a website. Each time a visitor accesses the site, the visitor count is incremented by one. This data is saved in a JSON file using the `fs.writeFile` method in Node.js.

## Features

- **Visitor Counting:** Counts each visitor and updates the total number in real time.
- **Data Storage:** Saves the visitor data in a JSON file on the server.

## Technologies

This project uses the following technologies:

- Node.js
- Express.js
- JavaScript

## Installation

To get started with this app, follow these steps:

1. Clone the repo:
git clone https://github.com/joandercim/visitors-counter-assignment.git

2. Install NPM packages:
npm install

3. Start the server:
node server.js

## Usage

Visit your local server at `http://localhost:3000` (or whatever port you have configured) to see the app in action. The visitor count is automatically updated and saved in the `visitors.json` file.

## License

Distributed under the MIT License. See `LICENSE` for more information.
