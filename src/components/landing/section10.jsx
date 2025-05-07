import { useState, useEffect, useRef } from "react";

import amImg from "../../assets/landing/section7/am.jpg";
import peImg from "../../assets/landing/section7/p.jpg";
import oakImg from "../../assets/landing/section7/oak.jpg";
import pepImg from "../../assets/landing/section7/pep.webp";
import coverImg from "../../assets/landing/G6.jpg";
import { useLang } from "../../i18n/LanguageContext";
import { t }       from "../../i18n/dictionary";
import useTrackSection from "../../hooks/useTrackSection";


/* Colors */
/* colour tokens */
const headingClr = "#7e2c21";
const bodyClr    = "#a36253";
const cardBg     = "#ffffff";
const quoteMark  = "#d7c9b8";

const testimonials = [
  {
    img: amImg,
    quote: {
      en : "Milchel <strong> is family</strong>. There were always brothers, sisters, and friends looking out for one another. They offered many activities that allowed us to develop <strong>leadership, responsibility, and collaboration skills</strong>. I truly enjoyed being part of this nurturing community!",
      th : "Milchel <strong> ไม่ใช่เเค่หอพักหรือที่อยู่ชั่วคราว แต่เป็นเหมือนครอบครัว </strong>  เพื่อน ๆ พี่ ๆ น้อง ๆ คอยดูแลช่วยเหลือกันและกันอยู่เสมอ และยังมีกิจกรรมที่ช่วยพัฒนาบุคลิกภาพอีกด้วย เช่น กิจกรรมนันทนาการ ชมรมกีฬาต่าง ๆ ที่ทำให้เราได้พัฒนาตัวเองในหลากหลายด้าน ไม่ว่าจะเป็นด้านความเป็นผู้นำ ฝึกความรับผิดชอบ การวางแผนงาน และการอยู่ร่วมกับผู้อื่น แฮปปี้มาก ๆ ค่ะ"
    },
    name: "Boonyawee Boonsongkor (Am)",
    initial: "A",
  },
  {
    img: peImg,
    quote: {
      en :"I still think about the moments I stayed at Milchel to this day. They were truly so much fun!. <strong>I learned teamwork, communication, and time management.</strong> Now I can see how much they have influenced my life today.",
      th : "เอาจริง ๆ ทุกวันนี้เรายังคิดถึงกิจกรรมที่เราได้ทำ ใน Milchel นั้นอยู่เลย เพราะมันสนุกมากจริง ๆ นอกจากจะสนุกเเล้ว กิจกรรมยังให้อะไรเราเยอะมาก เราได้เรียนรู้เรื่องการทำงานเป็นทีม การสื่อสารเเละการบริหารเวลา สิ่งเล็ก ๆ เหล่านี้ที่เราอาจจะไม่ได้เห็นค่าในตอนนั้น เเต่เชื่อเถอะว่า ทุกวันนี้ มันส่งผลต่อการใช้ชีวิตของเรามาก ๆ"
    },
    name: "Chakrid Aussavasirisilp (Pe)",
    initial: "P",
  },
  {
    img: oakImg,
    quote: {
      en :"Michel's activities were incredibly beneficial and helped me develop key life skills—like teamwork, collaboration, and effective communication. Beyond that, Michel gave me the chance to meet new friends and build meaningful relationships.",
      th : "กิจกรรมของ Milchel ประโยชน์มากและช่วยพัฒนาทักษะสำคัญในชีวิต เช่น การทำงานเป็นทีม การร่วมแรงร่วมใจ และการสื่อสารอย่างมีประสิทธิภาพ นอกจากนี้ Milchel ยังเปิดโอกาสให้ผมได้เจอเพื่อน ๆ และสร้างมิตรภาพที่ดีอีกด้วย"
    },
    name: "Kankavee Pipatsawetwanan (Oak)",
    initial: "O",
  },
  {
    img: pepImg,
    quote: {
      en :"Living at Michel encouraged me to try new activities, meet new people, and step outside my comfort zone. I learned valuable skills that schools don't always teach—like planning, teamwork, cultural awareness, and discipline. These are things I carry with me even now, and I can apply them in many parts of my life.",
      th : "การที่ได้อยู่ Milchel ทำให้เราได้ลองทำกิจกรรมใหม่ ๆ ได้เจอเพื่อน ๆ ได้ออกนอก comfort zone ของตัวเอง และได้เรียนรู้ทักษะที่ไม่ได้ถูกสอนในโรงเรียน เช่นการวางแผน การทำงานกับคนต่างวัฒนธรรม และการมีวินัย เรามองว่าสิ่งที่เราได้ เป็นสิ่งที่จะติดอยู่กับตัวเราไปเรื่อย ๆ เราสามารถนำทักษะเหล่านี้ไปปรับใช้ได้หลากหลายที่"
    },
    name: "Thornthun Kitjasateanphun (Pep)",
    initial: "P",
  },
];
export default function Section10() {
  const [isMobile, setIsMobile] = useState(false);
  const [current,   setCurrent] = useState(0);           // active page for mobile dots
  const scrollRef = useRef(null);
  const { lang } = useLang();
  const trackRef = useTrackSection("Testimonials");   

  /* ───── responsive flag ───── */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    onResize();                       // run once at mount
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ───── page tracking only on mobile ───── */
  const handleScroll = () => {
    if (!isMobile || !scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const pageWidth  = scrollRef.current.offsetWidth;      // one “page” = full viewport width
    setCurrent(Math.round(scrollLeft / pageWidth));
  };

  return (
    <section
      ref={trackRef}
      style={{
        width: "100%",
        padding: isMobile ? "64px 16px" : "96px 0 120px",
        background: "#fcf9f4",
      }}
    >
      {/* heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: isMobile ? "32px" : "38px",
          color: headingClr,
          margin: 0,
        }}
      >
      {lang ===  "en" ? "Voices of Our Grown-Up Students" : "ศิษย์เก่าเล่าความรู้สึก"}
        
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "780px",
          margin: "24px auto 56px",
          fontSize: isMobile ? "16px" : "18px",
          lineHeight: 1.6,
          color: bodyClr,
        }}
      >
        {lang ===  "en" ? "The true impact of the Happi360 method is reflected in the lives of those who grew up with it. Here's what our alumni say — even years later." : 
        "หลักสูตร Happi360 ยังอยู่ในชีวิตของเด็ก ๆ ที่ตอนนี้ได้เติบโตมาเป็นผู้ใหญ่ที่มีคุณภาพ แม้เวลาจะผ่านไปหลายปีหลังจากจบหลักสูตรแล้ว และนี่คือคำบอกเล่าจากศิษย์เก่าของเรา —"}


      </p>

      {/* cover image */}
      <img
        src={coverImg}
        alt="Alumni friends together"
        style={{
          display: "block",
          width: isMobile ? "260px" : "800px",
          maxWidth: "90%",
          marginInline: "auto",
          borderRadius: "12px",
          boxShadow: "0 8px 18px rgba(0,0,0,.06)",
          marginBottom: "56px",
        }}
      />

      {/* ───────── testimonials container ───────── */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: isMobile ? "auto" : "visible",
          scrollSnapType: isMobile ? "x mandatory" : "none",
          scrollBehavior: "smooth",
          flexWrap: isMobile ? "nowrap" : "nowrap",
          justifyContent: isMobile ? "flex-start" : "center",
          gap: "24px",
          padding: "0 5%",
          scrollbarWidth: "none",
        }}
        className="hide-scrollbar"     /* hide WebKit scrollbar via global CSS */
      >
        {testimonials.map(({ img, quote, name, initial }) => (
          <div
            key={name}
            style={{
              background: cardBg,
              borderRadius: "16px",
              minWidth: isMobile ? "300px" : "220px",
              maxWidth: isMobile ? "320px" : "25%",
              flexShrink: 0,
              padding: "32px 28px",
              scrollSnapAlign: isMobile ? "center" : "none",
              boxShadow: "0 6px 14px rgba(0,0,0,.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              gap: "48px",
            }}
          >
            {/* decorative quote mark */}
            <span
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                fontSize: "28px",
                color: quoteMark,
              }}
            >
              99
            </span>

            {/* avatar */}
            {img && (
              <img
                src={img}
                alt={name}
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top center",   // 👈 keeps the face in view (works for every image,

                }}
              />
            )}

            {/* quote */}
            <p
              style={{
                fontStyle: "italic",
                fontSize: "16px",
                lineHeight: 1.6,
                color: bodyClr,
                margin: 0,
              }}
              dangerouslySetInnerHTML={{ __html: quote[lang] }}
            />

            {/* name */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: quoteMark,
                  color: bodyClr,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {initial}
              </div>
              <strong style={{ fontSize: "16px", color: bodyClr }}>– {name}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* dot indicators – mobile-only */}
      {isMobile && (
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {testimonials.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === current ? "24px" : "10px",
                height: "10px",
                borderRadius: "999px",
                background: i === current ? headingClr : quoteMark,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}