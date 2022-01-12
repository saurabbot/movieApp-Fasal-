#movieAPP
##start api with command
### `npm start`
##_**DISCLAIMER**_
This project has moved maintainers and is no longer developed here. The up to date template can be found [here](https://github.com/rennemannd/MERN-Template).

#### _**IMPORTANT NOTE**_ - 
This project does not have a mongoDB connection setup. Setup the connection based on the environments below.
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.



##_ISSUE
1)The user state is not  being carried over to the movie Detail page so the add to watchlist with respect to every user is not happening.
![image](https://user-images.githubusercontent.com/64374511/148546316-9f566aa1-3bb0-43e5-ada4-bb5d126f19eb.png)
the user state is not being carried over here,tried for a while,but scince the timebound of the assignment couldnt fix that bug. 



## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `index.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


In the project directory, you can run:

### `npm start`
Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run dev`

Runs just the client app in development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view the client in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).
