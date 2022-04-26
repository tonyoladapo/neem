const planModel = require("../models/planModel");

const deletePlanController = (req, res) => {
  const id = req.params.id;

  const deletedPlan = await planModel.findOneAndDelete({ _id: id });

  res.send({
    message: "plan deleted",
    data: deletedPlan,
  });
};

module.exports = deletePlanController;
