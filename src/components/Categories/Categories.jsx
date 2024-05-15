import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch/useFetch";
import Check_box from "../CheckBox/Check_box";
import { IoCloseSharp } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import styles from './categories.module.css'
import { useSidebar } from "../../contexts/sidebarContext/SidebarContext";
export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, loading } = useFetch("categories");
  const { isShowSidebar, setIsShowSidebar } = useSidebar();
  useEffect(() => {
    data && setCategories(data);
  }, [data]);
  return (
    <div className={styles.categories} style={{ right: isShowSidebar ? "-100%" : "0" }}>
      <div className="bg-blue-800 flex w-full p-3 justify-between items-center ">
        <h1 className="font-extrabold flex items-center gap-2">
          <CiFilter size={25} />
          <span> قائمة فلترة المنتجات </span>
        </h1>
        <button
          onClick={() => {
            setIsShowSidebar(true);
          }}
        >
          <IoCloseSharp size={30} />
        </button>
      </div>
      {loading
        ? "loading..."
        : categories.map((cat) => {
            return (
              <div key={cat.id} className={styles.item}>
                <Check_box category={cat} />
              </div>
            );
          })}
    </div>
  );
};
