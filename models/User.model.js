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
    liked: [{type:Schema.Types.ObjectId, ref: "Like"}]
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
