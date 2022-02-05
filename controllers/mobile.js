const mobile = require("../models/mobile");
const getAllMobileStatic = async (req, res) => {
  const mobiles = await mobile.find({});
  res.status(200).json({ mobiles });
};
const getAllMobile = async (req, res) => {
  res.status(200).json({ msg: "ok" });
};
module.exports = { getAllMobileStatic, getAllMobile };
