const userAuth = async (req, res, next) => {
  console.log("Cookies received:", req.cookies); // Debugging
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ success: false, message: "Token missing. Login Again." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded); // Debugging

    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.log("JWT Error:", error); // Debugging
    return res.status(401).json({ success: false, message: "Invalid Token or Expired. Login Again." });
  }
};
