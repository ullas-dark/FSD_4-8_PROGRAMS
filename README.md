# Program 8: Authentication API using One-Way Password Hashing

MongoDB database: `authDB`

The manual adds the Mongoose connection while retaining `express.json()` and `app.use('/users', usersRouter)`. Registration/login logic belongs in `routes/users.js`; the user schema belongs in `models/Users.js`.

The manual starts the Express Generator app using `npm start` (`bin/www`). If that returns to the prompt, it specifically instructs running `node ./bin/www`. `server.js` is included only as an optional direct-start alternative.
