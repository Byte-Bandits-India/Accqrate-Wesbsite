"use client"; // required if using hooks like useFormik

import ContactForm from "@/components/ContactForm"; // adjust path

const ContactFormPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <ContactForm />
    </div>
  );
};

export default ContactFormPage;
