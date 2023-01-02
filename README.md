# Boilmaker-node-express-sequelize

### Project setup

1. install dependencies

```jsx
npm install dotenv express express-async-handler morgan nodemon

npm install pg pg-hstore sequelize

npm install colors
```

1. Script command to run project

```jsx
"scripts": {
    "dev": "nodemon server.js", // start server & auto update
    "seed": "node db/seed.js"   // seed database
  },
```

### Setup server

1. in config.env :
   - set up node dev environment
   - set up port of server

```
NODE_ENV=development
PORT=3000
```

1. Middleware of Express
   - morgan for Development logging
   - Body parser, reading data from body into req.body
   - Serving static files
   - Routes
   - Send index.html for SPAs
   - Error Handler
2. Route & Controller

   - all route are collected to routes/apiRoute.js
   - route templaet: routes/templateRoute.js
   - controller template: controllers/templateController.js

3. Other file
   - controllers/errorController.js : use to global error handler
   - utils/appError.js : custom App error class to custom error message, statusCode
4. Package
   - colors: use to color console, [https://www.npmjs.com/package/colors](https://www.npmjs.com/package/colors)
   - express-async-handler:
     - use to catch async error , replace try/catch block
     - [https://www.npmjs.com/package/express-async-handler](https://www.npmjs.com/package/express-async-handler)

### DataBase

1. create your database
2. Connect your database to express app

   - in db/database.js
   - convert boilermaker to your database name

   ```jsx
   const db_url = "postgres://localhost:5432/<your_db_name>";
   ```

3. create model, use db/model.exampleModel.js as template
4. in db/index.js
   - define association between models
   - collect all model, db & export
5. seed database

   - add data to db/data folder
   - import model, data to db/seed.js
   - create instance of data

   ```jsx
   // seed your data
   await Promise.all(
     exampleData.map((data) => {
       return Example.create(data);
     })
   );
   ```

   - run command: `npm run seed`
