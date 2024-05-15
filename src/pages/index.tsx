/** COMPONENTS   */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

export default function Home() {
  return (
    <>
      <Seo title="Coders Baban" description="Coders Baban" />

      <Layout>Hello world</Layout>
    </>
  );
}
