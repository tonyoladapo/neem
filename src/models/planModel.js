const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  amountForContribution: String,
  date: String,
  name: String,
  purpose: {
    iconName: String,
    iconType: String,
    id: Number,
    name: String,
  },
  selectedReminder: {
    label: String,
    value: Number,
  },
  targetAmount: String,
});

const planModel = mongoose.model("plans", planSchema);
module.exports = planModel;
