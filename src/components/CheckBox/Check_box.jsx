/* eslint-disable react/prop-types */
import "./checkbox.css"; // استيراد ملف الستايل للتصميم
import storeContext from "../../contexts/storeContext/storeContext"; // استيراد السياق (context) من ملف storeContext
import { useContext, useEffect } from "react"; // استيراد السياق والحالة من مكتبة رياكت
import qs from "qs"; // استيراد مكتبة qs لتسهيل تسلسل الاستعلامات

// تعريف العنصر Check_box كعنصر وظيفي يقوم بتصفية الفئات
const Check_box = ({ category }) => {
  // استخدام السياق للوصول إلى الدالة setFilter
  const { setFilter, selectedCategory, setSelectedCategory } =
    useContext(storeContext);

  // دالة للتعامل مع تغيير حالة الفئة
  const handleFilterCategory = (e) => {
    // التحقق من حالة الاختيار
    const isChecked = e.target.checked;
    // الحصول على معرف الفئة المختارة
    const selectedID = e.target.dataset.category;

    // تحديث الفئات المحددة
    setSelectedCategory((selectedCategory) => {
      if (isChecked) return [...selectedCategory, selectedID];
      return selectedCategory.filter((id) => id !== selectedID);
    });
  };

  useEffect(() => {
    // تكوين الاستعلام لتصفية المنتجات بناءً على الفئات المختارة
    const query = qs.stringify({
      filters: {
        categories: {
          id: {
            $in: selectedCategory,
          },
        },
      },
    });

    // ضبط التصفية مع الاستعلام المكون
    setFilter("http://localhost:1337/api/products?populate=*&" + query);
  }, [selectedCategory, setFilter]);

  // عرض عنصر الفئة وزر التبديل
  return (
    <div className="checkBoxContainer">
      <label className="toggler-wrapper style-6">
        <input
          type="checkbox"
          onChange={handleFilterCategory}
          data-category={category.id}
        />
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </label>

      <div className="badge">{category.attributes.title}</div>
    </div>
  );
};

export default Check_box;
