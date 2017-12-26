const usersDB = require('../models/users-model');

const usersController = {};

usersController.exports = {
  index(req, res, next) {
    usersDB.findAll()
      .then((users) => {
        res.locals.users = users;
        next();
      })
      .catch(err => next(err));
  },
};

module.exports = usersController;
