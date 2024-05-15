import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./About.module.css";
import { IoCloseSharp } from "react-icons/io5";
import TimelineComponent from "../../components/Timeline/Timeline";
import { Button, Avatar } from "flowbite-react";
import Footer from "../../components/Footer/Footer";
import TitleSection from "../../components/TitleSection/TitleSection";
const About = () => {
const doctors = [
  {
    name: "أ.د.نشوي",
    image: "/DoctorNashawa.png",
    jobTitle: "IT Doctor",
    info: "استاذ تكنولوجيا التعليم - مدير مركز تكنولوجيا التعليم  بجامعة دمياط - المشرف علي المشروع",
  },
  {
    name: "د.روان",
    image: "/rawan.png",
    jobTitle: "IT Doctor",
    info:"معيد بكلية التربية -قسم تكنولوجيا التعليم - المشرف المباشر علي المشروع والآخذ بزمام الامور "
  },
];

  const students = [

    {
      name: "زياد",
      image: "/zyad.png",
      jobTitle: "Frontend Dev",
      info: "مطور واجهة أمامية يعمل على تصميم وتطوير واجهات المستخدم باستخدام تقنيات مثل React وFramer Motion.",
    },
    {
      name: "امنية",
      image: "/omnia.png",
      jobTitle: "Frontend Dev",
      info: "مطورة واجهة أمامية تتخصص في إنشاء تجارب مستخدم جذابة ومبتكرة باستخدام مكتبات وأطر عمل مثل React وFramer Motion.",
    },
    {
      name: "اسراء",
      image: "/esraa.png",
      jobTitle: "DashBoard Dev",
      info: "مطورة لوحة معلومات تعمل على تصميم وتطوير واجهات مستخدم مبتكرة لعرض البيانات والإحصاءات باستخدام تقنيات مثل strapi , server side",
    },
    {
      name: "محمد",
      image: "/mohamed.png",
      jobTitle: "Backend Dev",
      info: "مطور خلفي متخصص في تطوير وصيانة خوادم الويب والتطبيقات باستخدام لغات البرمجة مثل Node.js وقواعد البيانات مثل MySQL.",
    },
    {
      name: "ياسمين",
      image: "/yasmeen.png",
      jobTitle: "Backend Dev",
      info: "مطورة خلفية محترفة تعمل على تصميم وبناء أنظمة معقدة وموثوقة للخوادم وقواعد البيانات باستخدام تقنيات حديثة مثل Strapi وMySQL.",
    },
    {
      name: "اشرقت",
      image: "/ashraqat.png",
      jobTitle: "Database Dev",
      info: "مطورة قاعدة بيانات متخصصة في تصميم وتطوير قواعد بيانات متطورة وفعالة تستخدم في تطبيقات الويب والأنظمة الإدارية باستخدام تقنيات مثل MySQL وFlowbit.",
    },
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleClick = (student) => {
    setSelectedStudent(student);
  };

  const handleClose = () => {
    setSelectedStudent(null);
  };

  return (
    <>
      <Navbar />

      <div className={styles.about}>
        <div className="container mx-auto overflow-hidden">
          <TitleSection firstPiece={"معلومات"} secondPiece={"عنا"} />
          <div className="divide-y-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-md:pb-5">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center max-sm:size-32 mx-auto my-6"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleClick(doctor)}
                >
                  <motion.img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-44 h-44 rounded-full mb-2 border-2 border-blue-700 shadow-2xl duration-300 cursor-pointer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                  <p className="text-lg font-semibold">{doctor.name}</p>
                  <p className="text-sm">{doctor.jobTitle}</p>
                </motion.div>
              ))}
            </div>

            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-md:my-5">
              {students.map((student, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center max-sm:size-32 mx-auto my-6"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleClick(student)}
                >
                  <motion.img
                    src={student.image}
                    alt={student.name}
                    className="w-44 h-44 rounded-full mb-2 border-2 border-blue-700 shadow-2xl duration-300 cursor-pointer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                  <p className="text-lg font-semibold">{student.name}</p>
                  <p className="text-sm">{student.jobTitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {selectedStudent && (
            <motion.div
              className="fixed top-0 left-0 w-full  h-full bg-black z-50 bg-opacity-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="bg-zinc-100 text-gray-950 w-6/12 flex flex-col justify-center  max-lg:w-8/12  p-8 rounded-lg "
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <h2
                  className="text-xl font-semibold mb-2 flex items-center
               "
                >
                  <Avatar img={selectedStudent.image} rounded>
                    <div className="space-y-1 font-medium dark:text-white ">
                      <div className="font-extrabold text-sky-900">
                        {" "}
                        {selectedStudent.name}{" "}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {selectedStudent.jobTitle}
                      </div>
                    </div>
                  </Avatar>
                </h2>

                <p className="text-lg mb-4 text-gray-600 ">
                  {selectedStudent.info}
                </p>
                <Button
                  outline
                  gradientDuoTone="purpleToBlue"
                  onClick={handleClose}
                >
                  <div className="flex items-center gap-2 font-bold">
                    <span> إغلاق</span>
                    <IoCloseSharp fontSize={30} />
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          )}

          <TimelineComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
