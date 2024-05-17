/** COMPONENTS   */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";

export default function Register() {
  return (
    <>
      <Seo
        title="Inscription sur Coders Baban"
        description="Page d'inscription"
      />

      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
}
