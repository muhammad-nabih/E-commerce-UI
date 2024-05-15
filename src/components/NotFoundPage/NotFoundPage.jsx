import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center items-center">
      <h1>404 الصفحة غير موجودة </h1>
      
      <Link to={"/"}> الرجوع للصفحة الرئيسية </Link>
    </div>
  );
}

export default NotFoundPage;
