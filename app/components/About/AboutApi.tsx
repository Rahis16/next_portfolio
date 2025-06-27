// app/about/page.tsx (or wherever you're using the component)
import axios from "axios";
import AboutContent from "./AboutContent";

const AboutPage = async () => {
  const res = await axios.get("http://localhost:8000/api/about");
  const aboutData = res.data;

  return <AboutContent data={aboutData} />;
};

export default AboutPage;
