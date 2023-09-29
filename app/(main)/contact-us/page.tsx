import ContactUsEmail from "@components/contact-us-email";
import { contactEmails } from "@config/site";

export default function ContactUs() {
  return (
    <div>
      <h1 className="border-b border-primary bg-secondary-secondary py-10 text-center text-5xl">
        Contact Us
      </h1>
      <div className="grid h-[600px] w-full grid-cols-2 border-b border-primary">
        <div className="flex flex-col justify-around bg-blue-800">
          <h3 className="mx-10 text-center text-6xl">
            We&lsquo;d love to hear from you
          </h3>
          <div className="flex justify-center">
            <div className=" aspect-square w-full rounded-full border"></div>
            <div className="ml-[-15%] aspect-square w-full rounded-full border border-dashed"></div>
            <div className="ml-[-15%] aspect-square w-full rounded-full border"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l border-primary">
          <ContactUsEmail emails={contactEmails} />
        </div>
      </div>
    </div>
  );
}
