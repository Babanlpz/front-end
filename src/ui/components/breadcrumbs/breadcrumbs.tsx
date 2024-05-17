import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-systeme/typography/typography";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiHome3Line } from "react-icons/ri";
import { uuidv4 } from "uuidv7";

export const Breadcrumbs = () => {
  const router = useRouter();

  const asPath = router.asPath;

  const segments = asPath.split("/");

  const lastSegment = segments[segments.length - 1];

  segments[0] = "acceuil";

  const view = segments.map((path, index) => (
    <div key={uuidv4()} className="flex items-center">
      <Link
        href={index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : "/"}
      >
        <Typography
          variant="caption3"
          component="span"
          className={clsx(
            path !== lastSegment ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
          )}
        >
          {path !== "acceuil" ? (
            path.replace(/-/g, " ")
          ) : (
            <RiHome3Line className="inline -mt-1" />
          )}
        </Typography>

        {path !== lastSegment && (
          <Typography
            variant="caption2"
            component="span"
            className="ml-2 text-gray-600"
          >
            /
          </Typography>
        )}
      </Link>
    </div>
  ));

  return (
    <>
      <Container className="flex items-center gap-2 py-7">{view}</Container>
    </>
  );
};
