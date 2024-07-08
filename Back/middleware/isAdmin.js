const User = require("../model/userModel")

exports.isAdmin = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user._id })
        if (user.role == "customer")
            return res.status(400).json({
                message: "You cannot perform this operation"
            })

        next()
    } catch (error) {
        res.status(400).json(error.message)
    }

}