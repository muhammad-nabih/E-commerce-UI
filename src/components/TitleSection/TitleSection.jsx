
import { motion } from "framer-motion";
const TitleSection = ({ firstPiece, secondPiece }) => {
  return (
    <motion.h1
      className="my-8 mx-auto text-center  indent-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -20 }} // تأثير البداية: العنوان غير مرئي ومتحرك باتجاه الأعلى بقيمة 20px
      animate={{ opacity: 1, y: 0 }} // تأثير الظهور: زيادة الشفافية وعودة العنوان إلى موضعه الطبيعي
      transition={{ duration: 0.5, delay: 0.1 }} // مدة التأثير وتأخير بدايته
    >
      {firstPiece}
      &nbsp;
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">
        {secondPiece}
      </span>{" "}
    </motion.h1>
  );
};

export default TitleSection;
