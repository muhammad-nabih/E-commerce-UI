import { motion } from "framer-motion";
import Star from "../Star/Star";
import { IoCloseOutline } from "react-icons/io5";
const ProductDetails = ({ product, onClose }) => {
  const urlImage = import.meta.env.VITE_APP_URL;

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex justify-center items-center bg-black z-50  bg-opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-zinc-100 text-black rounded-lg p-2 max-w-4xl max-sm:max-w-sm  max-md:max-w-lg max-lg:max-w-xl relative"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <IoCloseOutline size={30} />
        </button>
        <div className="flex items-center justify-center mb-4">
          <img
            src={product.attributes.image.data.attributes.url}
            alt={product.title}
            className="w-68 h-48 object-cover rounded-lg p-4"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">{product.attributes.title}</h2>
        <p className="text-gray-700 mb-4 text-lg line-clamp-4  overflow-auto">
          {product.attributes.desc}
        </p>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 mr-2">التقييم: </span>
          <div className="flex items-center">
            <Star stars={product.attributes.rating} />
          </div>
        </div>
        <p className="text-gray-600 mb-4 mr-2">
          السعر: {product.attributes.price} دولاراً
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetails;
