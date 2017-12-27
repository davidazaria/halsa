const usersDB = require('../models/users-model');

const usersController = {};

usersController.index = (req, res, next) => {
  usersDB.findAll()
    .then((users) => {
      res.json({
        message: 'ok',
        data:
        { users },
      });
    }).catch(next);
};

usersController.show = (req, res, next) => {
  usersDB.findById(req.params.id)
    .then((user) => {
      res.json({
        message: 'ok',
        data:
        { user },
      });
    }).catch(next);
};

usersController.create = (req, res, next) => {
  usersDB.create({
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
  usersDB.update({
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
      message: 'User updated successfully!',
      data:
      { user },
    });
  }).catch(next);
};

usersController.delete = (req, res, next) => {
  usersDB.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'User deleted successfully!',
      });
    }).catch(next);
};

module.exports = usersController;
