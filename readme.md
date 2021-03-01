# Sabio sweet app, react front end express backend

## Project structure

- /client - react app
- /server - backend api
  from each directory run **npm install**

## Running the parts

To run the server from the /server directory
**npm run dev:start** this will build and run the server

To run the server tests
**npm run test**

To run the client from the /client directory
**npm run start**

To run the client tests
**npm run test** make sure this is run in a separate terminal as it will auto watch files for changes

For both server and client to run individual tests
**npm run test -t (spec-name)** The file path isn't needed just the test name.
