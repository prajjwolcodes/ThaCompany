const User = require("../model/userModel")
const bcrpyt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const res = require("express/lib/response")

exports.registerUser = async (req, res) => {
    const { username, email, password, role } = req.body
    if (!username, !email, !password, !role)
        return res.status(400).json({
            message: "Enter all the fields"
        })

    const userFound = await User.findOne({ email })

    if (userFound)
        return res.status(400).json({
            message: "User with that email is already Registered"
        })

    await User.create({
        username, email,
        password: bcrpyt.hashSync(password, 10),
        role

    })

    res.status(201).json({
        message: "You are registered"
    })
}


exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user)
        return res.status(400).json({
            message: "No User Found"
        })

    const passwordMatch = bcrpyt.compareSync(password, user?.password)
    if (passwordMatch) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"
        })
        res.status(200).json({
            message: "You are successfully Logged in",
            token: token,
            user
        })
    }
    else {
        res.status(400).json({
            message: "Invalid password"
        })
    }
}

exports.test = (req, res) => {
    res.json({
        messgae: "AAyo"
    })
}