import Link from "next/link";
import { Icons } from "@components/icons";

interface EmailTextProps extends React.HTMLAttributes<HTMLDivElement> {
  email: string;
}
const EmailText = ({ children, email }: EmailTextProps) => {
  return (
    <div className="">
      {children}
      <Link
        className="flex items-center justify-center"
        href={`mailto:${email}`}
      >
        <Icons.mail className="k-8 mr-2 h-8" />
        <div className="">{email}</div>
      </Link>
    </div>
  );
};
const EmailSection = ({ name, email }: { name: string; email: string }) => {
  let children;
  if (name == "artists") {
    children = (
      <div className="text-lg ">
        "To become part of our network of artists, reach us at"
      </div>
    );
  }
  if (name == "partnerships") {
    children = (
      <div className="text-center text-lg">
        "To express your interest as a Partner, or Gallery, reach us at"
      </div>
    );
  }
  if (name == "sales") {
    children = (
      <div className="text-center text-lg">
        <p className="mt-2 text-xl">
          Interested in purchasing a piece of artwork?
        </p>
        <p className="my-2">Let’s set up an appointment via phone, </p>
        <p>zoom or even in person at</p>
      </div>
    );
  }
  return <EmailText email={email} children={children} />;
};

export default function ContactUsEmail({
  emails,
}: {
  emails: { [emails: string]: string };
}) {
  return (
    <div className="flex flex-col justify-center px-10">
      {Object.entries(emails).map(([name, email], i) => (
        <div className="mt-10" key={i}>
          <EmailSection name={name} email={email} />
        </div>
      ))}
    </div>
  );
}
