/** COMPONENTS   */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forget-password/forget-password.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo title="Connexion sur Coders Baban" description="Page de connexion" />

      <Layout>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
