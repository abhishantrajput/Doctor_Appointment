import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    return res.status(200).json({
      Success: "true",
      Message: "user Updated Successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      Message: "User doesn't exist",
      
    });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    return res.status(200).json({
      Success: "true",
      Message: "user Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      Message: "User Failed to Delete",
    });
  }
};
export const singleUserFind = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");



    return res.status(200).json({
      Success: "true",
      Message: "user Found Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      Message: "No user Could not be found",
    });
  }
};
export const allUsersFind = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    return res.status(200).json({
      Success: "true",
      Message: "users Found Successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      Success: "False",
      Message: "No user Could not be found",
    });
  }
};
