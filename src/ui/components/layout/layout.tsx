import { SessionStatusTypes } from "@/types/session-status-types";
import { Breadcrumbs } from "@/ui/components/breadcrumbs/breadcrumbs";
import { Session } from "@/ui/session/session";
import React from "react";
import { CallsToActionSideBarContribution } from "../calls-to-action/calls-to-action-side-bar-contribution";
import { CallsToActionSideBarLinkedin } from "../calls-to-action/calls-to-action-side-bar-linkedin";
import { Container } from "../container/container";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { UserAccountNavigation } from "../navigation/user-account-navigation";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
  sessionStatus?: SessionStatusTypes;
}

export const Layout = ({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
  sessionStatus,
}: Props) => {
  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 space-y-8">
            <UserAccountNavigation />
            <CallsToActionSideBarContribution />
            <CallsToActionSideBarLinkedin />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }

  return (
    <Session sessionStatus={sessionStatus}>
      <Navigation />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </Session>
  );
};
