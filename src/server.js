const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const addPlanController = require("./controllers/addPlanController");
const getPlanController = require("./controllers/getPlanController");
const deletePlanController = require("./controllers/deletePlanController");
const updatePlanController = require("./controllers/updatePlanController");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/plan/:id?", getPlanController);
app.post("/plan", addPlanController);
app.delete("/plan/:id", deletePlanController);
app.put("/plan/:id", updatePlanController);

mongoose
  .connect(
    "mongodb+srv://Gaamy:nimrod19966@neemcluster.nlnhh.mongodb.net/plan?retryWrites=true&w=majority"
  )
  .then(() => {
    const PORT = process.env.PORT || 9000;

    app.listen(PORT, () => {
      console.log("Server started on port 9000");
    });
  });
