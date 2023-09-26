import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },

    title: {
      type: [Number],
      required: true,
    },

    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
      required: true,
      maxlength: 60,
    },
  },
  { timestamps: true }
);

let productModel = null;

const getProductModel = () => {
  if (!productModel) {
    productModel = mongoose.model("Product", ProductSchema);
  }
  return productModel;
};
export default getProductModel;
