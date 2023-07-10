import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
      maxlength: 200,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    time: [
      {
        hour: { type: String, required: true },
        days: { type: String, required: true },
      },
    ],
    desc: {
      type: String,
      required: true,
    },
    links: [
      {
        icon: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Footer || mongoose.model("Footer", FooterSchema);
