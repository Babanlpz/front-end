import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-systeme/button/button";
import { Spinner } from "@/ui/design-systeme/spinner/spinner";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { RiAncientGateFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="Coders Baban" description="Coders Baban" />

      <Spinner size="small" />
      <Spinner />
      <Spinner size="large" />

      <div className="flex items-center gap-4 p-10 ">
        <Button
          size="small"
          icon={{ icon: RiAncientGateFill }}
          iconPosition="left"
        >
          Accent
        </Button>
        <Button size="small">Accent</Button>
        <Button size="small" variant="secondary">
          Secondary
        </Button>
        <Button size="small" variant="outline">
          Outline
        </Button>
        <Button size="small" variant="disabled" disabled>
          Disabled
        </Button>
        <Button size="small" variant="ico" icon={{ icon: RiAncientGateFill }} />
      </div>
      <div className="flex items-center gap-4 p-10 ">
        <Button>Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="disabled" disabled>
          Disabled
        </Button>
        <Button variant="ico" icon={{ icon: RiAncientGateFill }} />
      </div>
      <div className="flex items-center gap-4 p-10 ">
        <Button size="large">Accent</Button>
        <Button size="large" variant="secondary">
          Secondary
        </Button>
        <Button size="large" variant="outline">
          Outline
        </Button>
        <Button size="large" variant="disabled" disabled>
          Disabled
        </Button>
        <Button
          size="large"
          variant="ico"
          icon={{ icon: RiAncientGateFill }}
          iconTheme="secondary"
        />
        <Button
          size="large"
          variant="ico"
          icon={{ icon: RiAncientGateFill }}
          iconTheme="gray"
        />
        <Button size="large" variant="ico" icon={{ icon: RiAncientGateFill }} />
      </div>

      <Typography variant="display" component="h1">
        Coders Baban
      </Typography>
    </>
  );
}
