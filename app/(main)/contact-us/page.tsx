import Image from "next/image"

import ContactUsEmail from "@components/contact-us-email";
import { contactEmails } from "@config/site";

export default function ContactUs() {
  return (
    <div className="mb-10">
      <h1 className="border-b border-primary bg-secondary-secondary py-10 text-center text-5xl">
        Contact Us
      </h1>
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 border-b border-primary">
        <Image className="object-cover max-w-[600px] max-h-[1200px] border-primary border-l w-full h-full justify-self-end" src="/images/contact.png" alt="contact us allt" height={600} width={300} />
        <div className="flex flex-col items-center justify-center  border-primary">
          <ContactUsEmail emails={contactEmails} />
        </div>
      </div>
    </div>
  );
}
