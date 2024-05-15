import styles from "./landing.module.css";
import { Carousel } from "flowbite-react";
import "./landing.css";
import { LandingInfo } from "../LandingInfo/LandingInfo";

function Landing() {
  // بيانات العروض
  const offersData = [
    {
      title: "اكتشف أحدث التقنيات الإلكترونية",
      desc: "استكشف آخر الابتكارات في مجال التكنولوجيا الحديثة والإلكترونيات الرائدة التي تسهل حياتك وتجعلها أكثر متعة.",
      imgUrl: "/landInfo.svg",
    },
    {
      title: "استكشف أحدث السبورات الذكية",
      desc: "اغمر في عالم التكنولوجيا الحديثة واكتشف الإلكترونيات الرائدة التي تبسط حياتك وتعزز تجاربك.",
      imgUrl: "/landInfo2.svg",
    },
    {
      title: "اكتشف أحدث الأدوات التعليمية",
      desc: "استكشف آخر الابتكارات في مجال التكنولوجيا الحديثة والإلكترونيات الرائدة التي تجعل رحلتك التعليمية أكثر سلاسة وإشراقًا.",
      imgUrl: "/landInfo3.svg",
    },
  ];

  return (
    <section className={styles.landing}>
      <Carousel>
        {/* استخدام دالة map لإنشاء مكونات LandingInfo بشكل ديناميكي */}
        {offersData.map((offer, index) => (
          <div
            key={index}
            className={`flex h-full items-center justify-center dark:bg-gray-700 dark:text-white bg-gray-900 ${styles.clip}`}
          >
            <div className={styles.box}>
              <LandingInfo
                title={offer.title}
                desc={offer.desc}
                imgUrl={offer.imgUrl}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Landing;
