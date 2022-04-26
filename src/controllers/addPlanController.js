const plansModal = require("../models/planModel");

const addPlanController = async (req, res) => {
  try {
    const plan = request.body;

    const model = new plansModal(plan);
    await model.save();

    res.send({
      message: "successfully added",
      data: plan,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = addPlanController;
