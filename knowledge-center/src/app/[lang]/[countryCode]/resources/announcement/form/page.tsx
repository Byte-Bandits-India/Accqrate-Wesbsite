"use client"; // required if using hooks like useFormik

import ContactForm from "@/components/ContactForm"; // adjust path

const ContactFormPage = () => {
  return (
    <div className="min-h-screen">
      <ContactForm />
    </div>
  );
};

export default ContactFormPage;
