import { useState, useEffect, useRef } from "react";
import kulImg from "../../assets/landing/panelist/kul.jpg";
import praewImg from "../../assets/landing/panelist/praew.jpg";
import careImg from "../../assets/landing/panelist/care.jpg";
import { useLang } from "../../i18n/LanguageContext";
import useTrackSection from "../../hooks/useTrackSection";


const navy = "#1d2556";
const accentColour = "#d29c4b";

export default function Section9() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const { lang } = useLang();
  const trackRef = useTrackSection("Panelist");   

  const experts = [
    {
      img: careImg,
      name: "Patsuda Yuthakram (Care)",
      title: "Well-Being Leader, OpenSchool for Creatives and Design",
      bio: {
        en: `<strong>12 years of teaching experience</strong> at Mater Dei School and OpenSchool for Creatives and Design, Patsuda has worked closely with children from diverse backgrounds.`,
        th: `ภัทรสุดามีประสบการณ์สอน 12 ปีที่โรงเรียนมาแตร์เดอีวิทยาลัยและ OpenSchool for Creatives and Design โดยทำงานใกล้ชิดกับเด็ก ๆ จากหลากหลายภูมิหลังและวัย เธอรับผิดชอบดูแลสุขภาพจิตของนักเรียนและแนะนำแนวทางที่เหมาะสม ภัทรสุดามุ่งมั่นในการส่งเสริมวินัยและความฉลาดทางอารมณ์ในเด็ก ๆ        `,
      },
    },
    {
      img: praewImg,
      name: "Nichapat Prapasil (Praew)",
      title: "School Consultant, OpenSchool for Creatives and Design",
      bio: {
        en: `<strong>12 years of experience as a consultant.</strong> Degree in Education specializing in Psychology of Guidance. Engaging with families to nurture future generations.`,
        th: `ณิชาภัทรเป็นที่ปรึกษาโรงเรียนมากว่า 12 ปี โดยเคยทำงานร่วมกับโรงเรียนอัสสัมชัญ (บางรัก) โรงเรียนหอวัง โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร และโรงเรียนโชติวิทย์ เธอสำเร็จการศึกษาปริญญาตรีจากคณะศึกษาศาสตร์ ภาควิชาการแนะแนวและจิตวิทยา มหาวิทยาลัยศรีนครินทรวิโรฒ และมีความหลงใหลในความเป็นอยู่ที่ดีของเด็ก ๆ พร้อมทั้งให้คำปรึกษากับครอบครัวเพื่อเสริมสร้างอนาคตที่ดีให้กับเ`,
      },
    },
    {
      img: kulImg,
      name: "Kulwanee Meedeng (Kul)",
      title: "Senior Product Specialist, Audimed & Medical Product Company Thailand",
      bio: {
        en: `<strong>7 years of experience</strong> in <strong>neurology</strong> and <strong>medical products</strong>. Master's degree in Biomedical Engineering.`,
        th: `<strong>ด้วยประสบการณ์เกือบ</strong> 7 ปีในด้านระบบประสาทและผลิตภัณฑ์ทางการแพทย์ เธอสำเร็จการศึกษาระดับปริญญาโทด้านวิศวกรรมชีวการแพทย์ และเคยเป็นวิทยากรรับเชิญในงานประชุมเกี่ยวกับผลิตภัณฑ์ทางการแพทย์หลายงาน`,
      },
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // initialize immediately
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setCurrent(index);
    }
  };

  const scrollByCard = (dir) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: dir * width, behavior: "smooth" });
    }
  };

  return (
    <section ref={trackRef} style={{ padding: "96px 0 120px", background: "#ffffff", position: "relative" }}>
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "38px",
          lineHeight: 1.3,
          color: navy,
          margin: 0,
          maxWidth: "800px",
          marginInline: "auto",
          paddingInline: "16px",
        }}
      >
      {lang ===  "en" ? "We Have Invited Leading Experts In Child Development" 
      : "ในสัมมนา เราได้เชิญชวนผู้เชี่ยวชาญในด้านการพัฒนาศักยภาพเด็ก คุณจะได้พบกับท่านเหล่านี้โดยตรง"}
        
      </h2>

      {/* Accent Bar */}
      <div
        style={{
          margin: "40px auto 72px",
          width: "120px",
          height: "4px",
          background: accentColour,
          borderRadius: "4px",
        }}
      />

      {/* Scrollable (Mobile) / Flex Grid (Desktop) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: isMobile ? "nowrap" : "wrap",        // ✅ nowrap for mobile, wrap for desktop
          justifyContent: isMobile ? "flex-start" : "center",
          gap: "24px",
          padding: "30px 40px",
          overflowX: isMobile ? "auto" : "visible",       // ✅ scrolling only mobile
          scrollSnapType: isMobile ? "x mandatory" : "none",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",                         // hide Firefox scrollbar
        }}
        className="hide-scrollbar" // chrome scrollbar hide
      >
        {experts.map(({ img, name, title, bio }) => (
          <div
            key={name}
            style={{
              minWidth: isMobile ? "280px" : "320px",
              maxWidth: isMobile ? "90vw" : "320px",
              flexShrink: 0,
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 18px rgba(0,0,0,.06)",
              padding: "32px 24px",
              scrollSnapAlign: isMobile ? "center" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={img}
              alt={name}
              style={{
                width: "150px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "16px",
              }}
            />
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "22px",
                color: navy,
                margin: "8px 0",
              }}
            >
              {name}
            </h3>
            <p
              style={{
                fontWeight: 600,
                fontSize: "16px",
                color: navy,
                marginBottom: "16px",
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#38445b",
                lineHeight: 1.5,
              }}
              dangerouslySetInnerHTML={{ __html: bio[lang] }}
            />
          </div>
        ))}
      </div>


      {/* Page Indicators */}
      {isMobile && (
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {experts.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === current ? "24px" : "10px",
                height: "10px",
                borderRadius: "999px",
                background: i === current ? "#565fb0" : "#ccc",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
