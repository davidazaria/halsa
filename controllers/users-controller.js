const UsersDB = require('../models/users-model');

const usersController = {};

usersController.index = (req, res, next) => {
  UsersDB.findAll()
    .then((users) => {
      res.json({
        message: 'ok',
        data:
        { users },
      });
    }).catch(next);
};

usersController.show = (req, res, next) => {
  UsersDB.findById(req.params.id)
    .then((user) => {
      res.json({
        message: 'ok',
        data:
        { user },
      });
    }).catch(next);
};

usersController.create = (req, res, next) => {
  UsersDB.create({
    username:
    req.body.username,
    age:
    req.body.age,
    zip_code:
    req.body.zip_code,
    plan_id:
    req.body.plan_id,
    income:
    req.body.income,
  }, req.user.id).then((user) => {
    res.json({
      message: 'User added successfully!',
      data:
      { user },
    });
  }).catch(next);
};

usersController.update = (req, res, next) => {
  UsersDB.update({
    username:
    req.body.username,
    age:
    req.body.age,
    zip_code:
    req.body.zip_code,
    plan_id:
    req.body.plan_id,
    income:
    req.body.income,
  }, req.user.id).then((user) => {
    res.status(202).json({
      message: 'User updated successfully!',
      data:
      { user },
    });
  }).catch(next);
};

usersController.delete = (req, res, next) => {
  UsersDB.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'User deleted successfully!',
      });
    }).catch(next);
};

module.exports = usersController;
