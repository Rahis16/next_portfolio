// components/About.tsx (Server Component)
import AboutPage from "./AboutApi";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20" style={{backgroundColor:"var(--bg-color)"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AboutPage />
      </div>
    </section>
  );
};

export default About;
