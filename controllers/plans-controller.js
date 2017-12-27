const plansDB = require('../models/plans-model');

const plansController = {};

plansController.index = (req, res, next) => {
  plansDB.findAll()
    .then((plans) => {
      res.json({
        message: 'ok',
        data:
        { plans },
      });
    }).catch(next);
};

plansController.show = (req, res, next) => {
  plansDB.findById(req.params.id)
    .then((plan) => {
      res.json({
        message: 'ok',
        data:
        { plan },
      });
    }).catch(next);
};

module.exports = plansController;
