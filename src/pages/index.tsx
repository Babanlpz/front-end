import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-systeme/button/button";
import { Typography } from "@/ui/design-systeme/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Coders Baban" description="Coders Baban" />

      <div className="flex items-center gap-4 p-10 ">
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
      </div>
      <div className="flex items-center gap-4 p-10 ">
        <Button>Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="disabled" disabled>
          Disabled
        </Button>
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
      </div>

      <Typography variant="display" component="h1">
        Coders Baban
      </Typography>
    </>
  );
}
