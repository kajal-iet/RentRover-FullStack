const mongoose = require("mongoose");

const productUpload = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productUpload);