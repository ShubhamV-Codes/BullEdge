const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hash });

    res.json({ message: "Signup successful" });
  } catch (err) {
    res.status(400).json({ message: "User already exists or error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, "SECRET123", { expiresIn: "7d" });

    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
