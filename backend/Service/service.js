import jwt from "jsonwebtoken";

export const setUser = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      password: user.password,
      role: user.role,
    },

    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

export const getUser = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};
