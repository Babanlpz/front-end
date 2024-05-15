// COMPONENTS
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// DESIGN SYSTEME
import { Avatar } from "@/ui/design-systeme/avatar/avatar";
import { Logo } from "@/ui/design-systeme/logo/logo";
import { Spinner } from "@/ui/design-systeme/spinner/spinner";
import { Typography } from "@/ui/design-systeme/typography/typography";

export default function DesignSysteme() {
  return (
    <>
      <Seo title="Design Systeme" description="Design Systeme" />

      <Layout>
        <Container className="py-10 space-y-10">
          {/* Typography */}
          <div className="space-y-2">-</div>

          <div className="flex items-start gap-7">
            {/* Spinners */}
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Spinners
              </Typography>
              <div className="flex flex-items-center gap-2 p-5 border border-gray-400 rounded">
                <Spinner size="small" />
                <Spinner size="medium" />
                <Spinner size="large" />
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Logo
            </Typography>
            <div className="flex flex-items-center gap-2 p-5 border border-gray-400 rounded">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>

          {/* Avatar */}
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Avatar
            </Typography>
            <div className="flex flex-items-center gap-2 p-5 border border-gray-400 rounded">
              <Avatar
                size="small"
                src="./assets/images/avatar2.jpeg"
                alt="Avatar utilisateur"
              />
              <Avatar
                src="./assets/images/avatar2.jpeg"
                alt="Avatar utilisateur"
              />
              <Avatar
                size="large"
                src="./assets/images/avatar2.jpeg"
                alt="Avatar utilisateur"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-2">-</div>
        </Container>
      </Layout>
    </>
  );
}
