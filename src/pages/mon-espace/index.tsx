/** COMPONENTS   */
import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ProfileContainer } from "@/ui/modules/user-profil/profile/profile.container";

export default function UserAccount() {
  return (
    <>
      <Seo title="Mon espace" description="Description de la page" />

      <Layout withSidebar sessionStatus={REGISTERED}>
        <ProfileContainer />
      </Layout>
    </>
  );
}
