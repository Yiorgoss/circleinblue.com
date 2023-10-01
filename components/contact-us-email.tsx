import { Icons } from "@components/icons";
import Link from "next/link";

interface EmailTextProps extends React.HTMLAttributes<HTMLDivElement> {
  email: string;
  float: string;
}

const EmailText = ({ children,float, email }: EmailTextProps) => {
  const floatClass = {
    'left':"justify-left",
    'right': 'justify-end',
    'center': 'justify-center'
  }
  return (
    <div >
      {children}
      <Link
        className={`flex items-center ${floatClass[float]}`}
        href={`mailto:${email}`}
      >
        <Icons.mail className="k-8 mr-2 h-8" />
        <div className="">{email}</div>
      </Link>
    </div>
  );
};
const EmailSection = ({ name, email, float }: { name: string; email: string; float: string }) => {
  let children;
  if (name == "artists") {
    children = (
      <div className="text-lg ">
        To become part of our network of artists, reach us at
      </div>
    );
  }
  if (name == "partnerships") {
    children = (
      <div className="text-center text-lg">
        To express your interest as a Partner, or Gallery, reach us at
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
  return <EmailText email={email} float={float}>{children}</EmailText>;
};

const floatLookup = ['left', 'right', 'center']

export default function ContactUsEmail({
  emails,
}: {
  emails: { [emails: string]: string };
}) {

  return (
    <div className="flex flex-col justify-center px-10">
      {Object.entries(emails).map(([name, email], i) => (
        <div className="py-10" key={i}>
          <EmailSection name={name} float={floatLookup[i]} email={email} />
        </div>
      ))}
    </div>
  );
}
