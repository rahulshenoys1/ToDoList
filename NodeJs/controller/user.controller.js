const UserServices = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await UserServices.registerUser(email, password);

    res.json({ status: true, success: "user registered Sucessfully" });
  } catch (error) {
    throw error;
  }
};
