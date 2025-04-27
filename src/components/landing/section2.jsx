import section2Img from "../../assets/section2.jpg"; 
// If not, recreate the two colour values locally:
const headingColour   = "#7e2c21";   // deep reddish-brown
const accentColour    = "#d29c4b";   // warm ochre underline

export default function Section2() {
  return (
    <section
      style={{
        width: "100%",
        padding: "96px 0 120px",
        background: "linear-gradient(#fffefb 0%, #fff 80%)",
      }}
    >
      {/*  Section heading  */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "56px",
          color: headingColour,
          margin: 0,
        }}
      >
        It takes a village to raise a child
      </h2>

      {/*  Two-column content row  */}
      <div
        style={{
          marginTop: "56px",
          display: "flex",
          justifyContent: "center",
          gap: "64px",
          maxWidth: "1180px",
          marginInline: "auto",
          alignItems: "center",
        }}
      >
        {/* Left - image */}
        <img
          src={section2Img}
          alt="Child"
          style={{
            width: "480px",
            maxWidth: "100%",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        {/* Right */}
        <div
          style={{
            maxWidth: "560px",
            fontSize: "22px",
            lineHeight: 1.5,
            color: "#38445b",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <p>
            Over the past two decades, we've watched more children struggle with screen
            addiction, loneliness, and emotional burnout — even as they excel academically.
            That's why <strong>Milchel</strong> created a nurturing, values-based way to raise
            children who are both strong and kind — long before this became a trend.
          </p>
          <p>
            Now, for the first time, this proven approach — born in Singapore and rooted in
            real relationships — is coming to Thailand.
          </p>
        </div>
      </div>

      {/* Accent underline */}
      <div style={{
          width: "120px",
          height: "4px",
          background: accentColour,
          margin: "72px auto 0",
          borderRadius: "4px",}}
       />

      <div
        style={{
          marginTop: "56px",
          maxWidth: "720px",
          marginInline: "auto",
          fontSize: "22px",
          color: "#38445b",
          lineHeight: 1.5,
          textAlign: "center",
        }}>
        <p style={{ fontWeight: 600, marginBottom: "32px", fontFamily: "'Playfair Display', serif",}}>
          In just 4&nbsp;hours, you will learn…
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            fontWeight: 400,
            fontFamily: "'Playfair Display', serif",

          }}
        >
          {[
            "How to communicate effectively with your child",
            "How to manage phone and digital device usage",
            "How to instill discipline and a positive growth mindset",
            "How to build responsibility and social skills in your child",
          ].map((item) => (
            <li key={item} style={{ position: "relative", paddingLeft: "28px" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 2,
                  width: "8px",
                  height: "8px",
                  background: accentColour,
                  borderRadius: "50%",
                }}
              />
              {item}
            </li>
          ))}
        </ul>

        
      </div>


    </section>
  );
}
