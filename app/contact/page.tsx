//import ContactForm from "./ContactForm"
import OnlyContact from "../../components/common/OnlyContact";
// import assest


export default function Contact() {

  /* have right side and left side, right side for some text and right side for contact form */
  return (
<<<<<<< HEAD
    <main className="bg-secondary  flex items-center justify-center  px-32 pt-32">
=======
    <main className="bg-secondary  flex items-center justify-center py-16 px-32">
>>>>>>> 86ff7b944db0c72aeefa98931dfb33233842d435
      <section id="contact" className="flex flex-col md:flex-col gap-6 md:pb-16">
       <div className=" bg-accent p-6 flex items-center justify-center rounded-lg shadow-lg">
      {/* Left side */}
      <div className="w-full md:w-1/2 text-center md:text-left px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-label">
          Contact
        </h1>
        <p className="text-lg text-text-neutral mt-4">
        Do you have a question, a project idea, or just want to say hello? Feel free to reach out! I'd love to hear from you. Please use the form below to get in touch, and I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex items-center justify-center">
      <OnlyContact
        name="Adithep Tamwisai"
        email="Tamwisai.Adithep@gmail.com"
        phone="0413189619"
        imageUrl="./images/home.jpg"
      />
      </div>
      </div>
      </section>
    </main>
  );
}
