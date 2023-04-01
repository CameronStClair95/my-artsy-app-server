const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
        "Please include at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*) and at least 8 characters long."
      ],
    },
    fullname: {
      type: String,
      required: [true, "Fullname is required."],
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Username is required."],
    },
    postsByUser: [{type:Schema.Types.ObjectId, ref: "Post"}],
    artpostsByUser: [{type:Schema.Types.ObjectId, ref: "Artpost"}],
    commentsByUser: [{type:Schema.Types.ObjectId, ref: "Comment"}],
    liked: [{type:Schema.Types.ObjectId, ref: "Like"}],

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    }

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
