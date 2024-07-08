const jwt = require("jsonwebtoken")
const User = require("../model/userModel")

exports.requiresLogin = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token)
            return res.status(400).json({
                message: "You are not logged in"
            })

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decode)
            return res.status(400).json({
                message: "Invalid token"
            })

        const user = await User.findOne({ _id: decode.id })
        req.user = user
        next()
    } catch (error) {
        res.status(400).json(error.message)
    }

}