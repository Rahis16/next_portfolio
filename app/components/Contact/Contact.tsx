// components/Contact.tsx (Server Component)
import ContactApi from "./ContactApi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ContactApi />
      </div>
    </section>
  );
};

export default Contact;
