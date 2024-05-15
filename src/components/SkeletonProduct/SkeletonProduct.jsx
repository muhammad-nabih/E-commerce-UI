export const SkeletonProduct = () => {
  return (
 
      <div
        role="status"
        className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex items-center justify-center h-48 p-5 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <img
            src="/loadingImage.svg"
            alt="loadingImage"
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
          />
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        {/* مش بتظهر الا في قارئ الشاشة بتقول للشخص انه في عملية تحميل حاليا  */}
        <span className="sr-only">يتم تحميل المنتجات </span>
      </div>

  );
};
