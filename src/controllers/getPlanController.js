const planModel = require("../models/planModel");

const getPlanController = async (req, res) => {
  const id = req.params.id;

  if (id) {
    const plan = await planModel.findById({ _id: id });
    res.send(plan);
  } else {
    const plans = await planModel.find();
    res.send(plans);
  }
};

module.exports = getPlanController;
