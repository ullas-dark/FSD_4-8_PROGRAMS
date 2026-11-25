# Program 5: Request Validation

The manual says no app.js changes are required. The important existing lines are:
- `app.use(express.json());`
- `app.use('/users', usersRouter);`

The validation logic belongs in `routes/users.js` and uses `express-validator`.

The manual uses the Express Generator `bin/www` entry point with `npm start`. `server.js` is included only as an optional direct-start alternative.
