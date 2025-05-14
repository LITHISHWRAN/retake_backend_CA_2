const express = require("express");
const app = express();

const User = []
app.use(express.json());

app.post("/api/userSignup", (req, res) => {
    const { userName, email, password, dateOfBirth } = req.body;
    if (!userName) return res.status(404).json({ message: "Username cannot be empty"});
    if (!email) return res.status(404).json({ message: "Email cannot be empty"});
    if (password.length < 8 || password.length >= 16) return res.status(400).json({ message: "Password length should be greater than 8 or less than or equal to 16"});
    const existingUser = User.some(u => userName === u.userName);
    if (existingUser) return res.status(400).json({ message: "User already exist"})
    const newUser = req.body;
    User.push(newUser);
    return res.status(200).json({ message: "User created successfullly", newUser})
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});