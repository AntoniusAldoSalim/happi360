import { useState, useEffect } from "react";

import kulImg from "../../assets/landing/panelist/kul.jpg";
import praewImg from "../../assets/landing/panelist/praew.jpg";
import careImg from "../../assets/landing/panelist/care.jpg";

const navy = "#1d2556";
const accentColour = "#d29c4b";

const experts = [
  {
    img: kulImg,
    name: "Kulwanee Meedeng (Kul)",
    title: "Senior Product Specialist, Audimed & Medical Product Company Thailand",
    bio: `Kulwanee is a Senior Product Specialist with 7 years of experience in neurology and medical
          products at Audimed and Medical Product Company, Thailand. She holds a Master's degree
          in Biomedical Engineering and has spoken at various product-related conferences,
          including the Thailand Radiofrequency Ablation Conference at the National Cancer Institute.`,
  },
  {
    img: praewImg,
    name: "Nichapat Prapasil (Praew)",
    title: "School Consultant, Assumption College Bangkak",
    bio: `Nichapat has been a school consultant for 12 years, working with Assumption College Bangkrak,
          Hor Wang School, and Srinakharinwirot University Demonstration School. With a degree in
          Education Psychology of Guidance, she engages with families to provide additional
          consultation and guidance, reflecting her commitment to nurturing future generations.`,
  },
  {
    img: careImg,
    name: "Patsuda Yuthakram (Care)",
    title: "Well-Being Leader, Assumption College Bangkak",
    bio: `With 12 years of teaching experience at Mater Dei School and OpenSchool for Creatives and
          Design, Patsuda has worked closely with children from diverse backgrounds. As the well-being
          leader at her school she oversees students' mental health and guides them toward suitable
          pathways, fostering resilience and emotional intelligence in children.`,
  },
];

export default function Section6() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // initialize immediately
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        padding: isMobile ? "64px 16px" : "96px 0 120px",
        background: "#ffffff",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: isMobile ? "32px" : "38px",
          lineHeight: 1.3,
          color: navy,
          margin: 0,
          maxWidth: "800px",
          marginInline: "auto",
          paddingInline: isMobile ? "12px" : "0",
        }}
      >
        For this seminar, we have invited leading experts in child development. You'll get to meet them in person.
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

      {/* Expert Cards */}
      <div
        style={{
          width: "90%",
          maxWidth: "1100px",
          marginInline: "auto",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "48px" : "72px",
        }}
      >
        {experts.map(({ img, name, title, bio }) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "24px" : "48px",
              alignItems: isMobile ? "center" : "flex-start",
              textAlign: isMobile ? "center" : "start",
            }}
          >
            {/* Photo */}
            <img
              src={img}
              alt={name}
              style={{
                width: "180px",
                height: "240px",
                objectFit: "cover",
                borderRadius: "12px",
                flexShrink: 0,
              }}
            />

            {/* Text block */}
            <div style={{ flex: 1, minWidth: "260px" }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: isMobile ? "22px" : "26px",
                  color: navy,
                  margin: isMobile ? "16px 0 8px" : "0",
                }}
              >
                {name}
              </h3>

              <p
                style={{
                  fontWeight: 600,
                  margin: "8px 0 24px",
                  fontSize: isMobile ? "16px" : "18px",
                  color: navy,
                  lineHeight: 1.45,
                }}
              >
                {title}
              </p>

              <p
                style={{
                  fontSize: isMobile ? "15px" : "17px",
                  lineHeight: 1.6,
                  color: "#38445b",
                  margin: 0,
                }}
              >
                {bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
