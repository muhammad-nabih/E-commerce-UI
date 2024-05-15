import { motion } from "framer-motion";

export const LandingInfo = ({ title, desc, imgUrl }) => {
  return (
    <motion.div
      className="w-full flex max-sm:flex-col items-center justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-6/12 max-sm:w-11/12"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={imgUrl} alt="" />
      </motion.div>

      <motion.div
        className="w-6/12 flex max-sm:w-full flex-col gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h5
          className="lg:text-3xl sm:text-xl max-sm:2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-400 dark:text-white"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {title}
        </motion.h5>
        <motion.p
          className="font-normal text-zinc-400 dark:text-gray-400"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {desc}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
