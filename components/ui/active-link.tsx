import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@lib/utils";

interface ActiveLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
}

export default function ActiveLink({
  children,
  href,
  className,
  activeClassName,
}: ActiveLinkProps) {
  const currentPath = usePathname();

  let active = currentPath.includes(href);
  if (currentPath != "/" && href == "/") {
    active = false;
  }

  return (
    <Link
      href={href}
      className={cn(
        className,
        { "text-2xl text-blue-300": active },
        activeClassName,
      )}
    >
      {children}
    </Link>
  );
}
