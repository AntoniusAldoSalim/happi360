import Hero from "../components/landing/hero.jsx";
import Section2 from "../components/landing/section2.jsx";
import Section3 from "../components/landing/section3.jsx";
import Section4 from "../components/landing/section4.jsx";
import Section6 from "../components/landing/section6.jsx";
import Section9 from "../components/landing/section9.jsx";
import Section10 from "../components/landing/section10.jsx";
import Section5 from "../components/landing/section5.jsx";
import Section7 from "../components/landing/section7.jsx";
import Section8 from "../components/landing/section8.jsx";
import Section11 from "../components/landing/section11.jsx";
import Section12 from "../components/landing/section12.jsx";


const Home = () => {


    return (
        <div style={{display:'flex', flexDirection:'column', width:'100%', }}>

            <Hero/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
            <Section10/>
            <Section11/>
            <Section12/>

        </div>

    );
};

export default Home;