import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-systeme/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Coders Baban" description="Coders Baban" />
      <Typography variant="display" component="h1">
        Coders Baban
      </Typography>
    </>
  );
}
