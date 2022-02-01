const getAllMobileStatic = async (req, res) => {
  res.status(200).json({ msg: "okddd" });
};
const getAllMobile = async (req, res) => {
  res.status(200).json({ msg: "ok" });
};
module.exports = { getAllMobileStatic, getAllMobile };
