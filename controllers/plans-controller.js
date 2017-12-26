const plansDB = require('../models/plans-model');

const plansController = {};

plansController.exports = {
  index(req, res, next) {
    plansDB.findAll()
      .then((plans) => {
        res.locals.plans = plans;
        next();
      })
      .catch(err => next(err));
  },
};

plansController.show = (req, res, next) => {
  plansDB.findById(req.params.id)
    .then(plan => {
      res.json({
        message: 'ok',
        data:
        { plan },
      });
    }).catch(next);
};

module.exports = plansController;
