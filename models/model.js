const mongoose = require("mongoose");

const moment = require("moment");

var createdAt = function () {
  var d = new Date();
  var formattedDate = moment(d).format("MM-DD-YYYY, h:mm:ss a");
  return formattedDate;
};

const dataSchema = new mongoose.Schema({
  itemType: {
    required: true,
    type: String,
  },
  orderState: {
    required: true,
    type: String,
  },
  lastUpdateTime: {
    type: String,
    default: createdAt,
  },
  branch: {
    required: true,
    type: String,
  },
  customer: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
