const UserModel = require("../model/user.model");

class UserServices {
  static async registratin(email, password) {
    try {
      const createUser = new UserModel({ email, password });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserServices;
