const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  amountForCOntribution: String,
  date: String,
  name: String,
  purpose: [
    {
      icon: Object,
      iconName: String,
      iconType: String,
      id: Number,
      name: String,
    },
  ],
  selectedRemider: {
    label: String,
    value: Number,
  },
  targetAmount: String,
});

const planModel = mongoose.model("plans", planSchema);
module.exports = planModel;
