// استيراد أيقونات النجوم من مكتبات React Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

// تعريف دالة Star واستقبال خاصية stars التي تحدد عدد النجوم
function Star({ stars }) {
  // إنشاء مصفوفة تحتوي على 5 عناصر باستخدام Array.from
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    // حساب قيمة النصف الذي يمثل نصف نجمة
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-amber-300" size={21} />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-amber-300" size={21} />
        ) : (
          <AiOutlineStar size={21} />
        )}
      </span>
    );
  });
  // إرجاع مصفوفة النجوم
  return <>{ratingStar}</>;
}

// تصدير دالة Star كافتراضي
export default Star;
