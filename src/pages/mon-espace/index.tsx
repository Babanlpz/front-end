/** COMPONENTS   */
import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { UserAccountContainer } from "@/ui/modules/user-profil/user-account/user-account.container";

export default function UserAccount() {
  return (
    <>
      <Seo title="Mon espace" description="Description de la page" />

      <Layout withSidebar sessionStatus={REGISTERED}>
        <UserAccountContainer />
      </Layout>
    </>
  );
}
