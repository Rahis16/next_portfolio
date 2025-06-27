// components/About.tsx (Server Component)
import AboutContent from "./AboutContent"; // client component

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AboutContent />
      </div>
    </section>
  );
};

export default About;
