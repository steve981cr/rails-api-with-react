# README

This application goes along with the Build a Rails API with React Tutorial. Instructions on building this app are in two parts:

Building the Rails API: http://www.techandstartup.org/tutorials/rails-api

Building the React front end: http://www.techandstartup.org/tutorials/react-crud-app

This is a Rails API only application.

The React app is in the client directory.

To run this app locally first start the Rails server on port 3001: rails server -p 3001

Then run the Node server to start React: yarn --cwd client start

The app will launch on port 3000.

If you have the foreman gem installed you can run both servers with one command:

foreman start -f Procfile.dev