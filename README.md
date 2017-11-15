# BiManager with Apollo
This is a small frontend architecture prototype for our new project at ergovia. 
I used [React](https://github.com/facebook/react) for the UI, [Redux](https://github.com/reactjs/redux) for statehandling and [Apollo](https://github.com/apollographql) for backend-communication via GraphQL. 
My backend is a [Graphcool](https://www.graph.cool/) service 

## Getting started
First of all install the required node modules with
``npm install``

After installing the modules go to [Graphcool Console](https://console.graph.cool/) and register your own service. 
When you're done you need to install the `Graphcool CLI` with `npm install -g grapcool`.
The `Graphcool CLI` is required for uploading the provided GraphQL Schema (`/server/types.graphql)`to your service. To connect the prototype with 
your Graphcool Service `cd` into `/server`, change the name of `graphcool.yml.template` to `graphcool.yml`, type `graphcool deploy` and follow the steps in your command line. Your service
is now deployed and ready to use. Don't forget to copy the URL `Simple API` that is shown in the output from `graphcool deploy` you will need it.

Next open the `src/index.js` and copy your URL to line 14.

Now you should be able to run the prototype with 
`npm start`

You won't see any data, because your graphcool-backend is empty and atm it isn't possible to use the 'Add Goal'-function 
in a 'persistent way' so you have to add your data in the [Graphcool Console](https://console.graph.cool/) manually. I will provide the 
add-feature as soon as I can.
