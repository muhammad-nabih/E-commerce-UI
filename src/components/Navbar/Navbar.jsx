import { Navbar } from "flowbite-react";
import './Navbar.css'
import NavItem from "../NavItem/NavItem";
import { FaHome, FaShoppingBasket } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { useCart } from "../../contexts/CartContext/CartContext";

export default function _Navbar() {
  const { setOpen } = useCart();

  const handleShoppingBasket = () => {
    setOpen(true);
  };

  return (
    <nav className="shadow-md sticky top-0 z-30 w-full">
      <Navbar fluid className="bg-gray-950 text-zinc-50 w-full  flex-nowrap">
        <Navbar.Brand href="/" className="py-3">
          <img
            src="/ecommerce.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap mx-2 text-xl font-extrabold dark:text-white-50 text-sky-400">
            إلكتروماركت{" "}
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 ">
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <ul className="flex md:mx-20 flex-col gap-5 md:flex-row md:items-center  py-3">
            <NavItem
              to="/"
              label="الصفحة الرئيسية"
              icon={<FaHome size={25} />}
            />

            <NavItem to="/about" label="ماذا عنا" />
            <NavItem to="/contact" label="تواصل معنا" />
            <NavItem
              to="/sections"
              label="فلتر الاقسام"
              icon={<CiFilter size={25} />}
            />
          </ul>
          <div className=" cursor-pointer flex md:items-center md:justify-center indent-11 px-8">
            <FaShoppingBasket size={30} onClick={handleShoppingBasket} />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
