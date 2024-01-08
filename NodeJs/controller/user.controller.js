const UserServices = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await UserServices.registerUser();

    res.json({ status: true, success: "user registered Sucessfully" });
  } catch (err) {
    throw err;
  }
};
