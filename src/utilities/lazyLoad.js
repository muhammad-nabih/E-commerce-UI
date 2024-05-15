import { lazy } from "react";

// دا الفانكشن بتاعنا اللي هنستخدمها عشان نحمل الكومبوننتات بطريقة تأخيرية
export const lazyLoad = (path, namedExport) => {
  return lazy(async () => {
    // بنعمل import للمسار اللي معطيناه وبنرجع الوعد بتاعه
    const promise = import(path);
    // لو المستخدم معطلناش اسم الفانكشن اللي عايزين نحملها، نرجع الوعد بالموديول كامل
    if (namedExport === null) {
      return promise;
    } else {
      // بنستنى الوعد بتاع ال import يتحقق، وبعدين بنرجع اسم الفانكشن اللي عايزيناها
      const module = await promise;
      return ({ default: module[namedExport] });
    }
  });
};
