import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    isverified: {
        type: Boolean,
        default: false,
    },
    isadmin: {
        type: Boolean,
        default: false,
    },
    forgotpasswordtoken: {
        type: String,
    },
    forgotpasswordexpiry: {
        type: Date,
    },
    verificationtoken: {
        type: String,
    },
    verificationtokenexpiry: {
        type: Date,
    },
    coursepurchased: [
        {
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Course"
            }
        }
    ]
}, {
    timestamps: true,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
